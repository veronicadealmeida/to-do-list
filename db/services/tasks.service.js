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

export default { get, createTask };
