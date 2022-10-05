import TasksRepository from "../repositories/tasks.repository.js";

async function get(req, _res, _next) {
  const tasksValues = await TasksRepository.get();
  const page = +req.query.page || 1;
  const pageSize = +req.query.pageSize || 50;
  const salto = (page - 1) * pageSize;
  const regIni = (page - 1) * pageSize + 1;
  const regFim = page * pageSize;

  const post = tasksValues.items.slice(salto, salto + pageSize);
  console.log("pagina", page);
  console.log("salto", salto);
  console.log("limite", pageSize);
  console.log("regIni", regIni);
  console.log("regFim", regFim);
  console.log(
    "page * (salto === 0 ? 1 : salto)",
    page * (salto === 0 ? 1 : salto)
  );
  console.log("tasksValues.items.length", tasksValues.items.length);
  let resp = {
    hasNext: tasksValues.items.length > page * (salto === 0 ? pageSize : salto),
    items: post,
  };

  return resp;
}

async function existTaskById(id) {
  const tasks = await TasksRepository.get();
  const findTask = tasks.items.findIndex((p) => p.id === parseInt(id)) !== -1;

  return findTask;
}

// async function post(title, status, description, dateLimit, dateDone, category) {
//   const taskValue = await TasksRepository.post(
//     title,
//     status,
//     description,
//     dateLimit,
//     dateDone,
//     category
//   );

async function createTask(task) {
  return await TasksRepository.insertTask(task);
}

async function deleteTask(id) {
  await TasksRepository.deleteTask(id);
}

async function getTask(id) {
  const task = await TasksRepository.getTask(id);

  return task;
}

async function updateTask(id, task) {
  return await TasksRepository.updateTask(id, task);
}

export default {
  get,
  createTask,
  existTaskById,
  deleteTask,
  getTask,
  updateTask,
};
