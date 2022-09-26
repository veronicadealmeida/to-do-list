import TasksRepository from "../repositories/tasks.repository.js";

async function get(req, _res, _next) {
  const tasksValues = await TasksRepository.get();
  const pagina = +req.query.page || 1;
  const limite = +req.query.pageSize || 50;
  const salto = (pagina - 1) * limite;

  const post = tasksValues.items.slice(salto, salto + limite);
  let resp = {
    hasNext: pagina * salto < tasksValues.items.length,
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
