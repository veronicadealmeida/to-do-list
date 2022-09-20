import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function readData() {
  const data = JSON.parse(await readFile(global.fileNameTasks));
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

export default { get, insertTask };
