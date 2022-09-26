import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function readData() {
  const data = JSON.parse(await readFile(global.fileNameTasks));

  data.items.sort((a, b) => {
    console.log(a.dateDone);
    if (a.dateDone > b.dateDone) {
      return 1;
    }
    if (a.dateDone < b.dateDone) {
      return -1;
    }
    return 0;
  });

  return data;
}

async function get() {
  const data = await readData();

  return data;
}

async function insertTask(task) {
  const data = await readData();

  task = {
    id: data.nextId++,
    status: task.status,
    title: task.title,
    description: task.description,
    dateLimit: task.dateLimit,
    dateDone: task.dateDone,
    category: task.category,
  };

  data.items.push(task);
  await writeData(data);
  return task;
}

async function writeData(data) {
  await writeFile(global.fileNameTasks, JSON.stringify(data, null, 2));
}

async function deleteTask(id) {
  const data = await readData();
  data.items = data.items.filter((p) => p.id !== parseInt(id));

  await writeData(data);
}

async function getTasks() {
  const data = await readData();
  return data.items;
}

async function getTask(id) {
  const tasks = await getTasks();
  const task = tasks.find((p) => p.id === parseInt(id));
  console.log(id);
  console.log(task);
  return task;
}

async function updateTask(id, task) {
  const data = await readData();
  const index = data.items.findIndex((p) => p.id === parseInt(id));

  data.items[index].title = task.title;
  data.items[index].status = task.status;
  data.items[index].description = task.description;
  data.items[index].dateLimit = task.dateLimit;
  data.items[index].dateDone = task.dateDone;
  data.items[index].category = task.category;

  await writeData(data);

  return data.items[index];
}

export default { get, insertTask, deleteTask, getTask, updateTask };
