

class TaskManager {
    constructor(
        n // общее число роботов-исполнителей (от 1 до 1024)
    ){
        this._tasks = [];
        this._report = Array.from({length: n}).map(() => {
            return {
                // число — общее количество выполненных успешно задач
                successCount: 0,
                // число — общее количество невыполненных задач
                failedCount: 0,
                // массив строк — идентификаторы взятых задач по очереди
                tasks: [],
                // число — количество проведённых в работе миллисекунд
                timeSpent: 0,
            };
        })
    };
    // Добавление задачи в очередь
    addToQueue(
        task // задача для исполнения, см. формат выше
    ){
        for (let i = 0; i < this._tasks.length; i++) {
            if (task.priority > this._tasks[i].priority) {
                this._tasks.splice(i, 0, task);
                return
            }
        }
        this._tasks.push(task);

    };

    job(task, robot) {
        const report = this._report[robot];
        const start = Date.now();
        return new Promise(resolve => {
            task.job()
                .then(() => {
                    report.successCount++;
                    report.tasks.push(task.id);
                })
                .catch(() => {
                    report.failedCount++;
                })
                .finally(() => {
                    report.timeSpent += (Date.now() - start);
                    return resolve(report)
                });
        })
    }

    // Promise, который запускает процесс выполнения задач и выдаёт список отчётов
    async run() {
        console.log(this._tasks);
        while (this._tasks.length) {
            const tasks = this._tasks.splice(0, this._report.length);
            await Promise.all(tasks.map((task, robotIndex) => this.job(task, robotIndex)))
        }

        return new Promise((resolve) => {
            return resolve(this._report);
        });
    };

}

(async () => {
    const generateJob = (id) =>
        function () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    Math.random() > 0.8 ? resolve() : reject();
                }, Math.random() * 2000);
            });
        };

    const tm = new TaskManager(10);

    tm.addToQueue({
        id: "id0",
        priority: 10,
        job: generateJob("id0"),
    });
    tm.addToQueue({
        id: "id1",
        priority: 1,
        job: generateJob("id1"),
    });
    tm.addToQueue({
        id: "id2",
        priority: 10,
        job: generateJob("id2"),
    });
    tm.addToQueue({
        id: "id3",
        priority: 5,
        job: generateJob("id3"),
    });

    tm.addToQueue({
        id: "id4",
        priority: 4,
        job: generateJob("id0"),
    });
    tm.addToQueue({
        id: "id5",
        priority: 150,
        job: generateJob("id0"),
    });
    tm.addToQueue({
        id: "id6",
        priority: 100,
        job: generateJob("id0"),
    });

    const report = await tm.run();
    console.log(report);
})();