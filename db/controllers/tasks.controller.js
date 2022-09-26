import TasksService from "../services/tasks.service.js";

async function get(req, res, next) {
  try {
    res.send(await TasksService.get(req, res, next));
  } catch (err) {
    next(err);
  }
}

async function post(req, res, next) {
  try {
    let task = req.body;
    console.log(task);

    //   if (!pedido.cliente || pedido.valor == null || !pedido.produto) {
    //     throw new Error('Cliente, Produto e Valor são obrigatórios');
    //   }

    task = await TasksService.createTask(task);

    res.send(task);
  } catch (err) {
    next(err);
  }
}

async function deleteTask(req, res, next) {
  console.log(req.params.id);
  try {
    let id = req.params.id;
    let task = req.body;

    if (!id) {
      throw new Error("Id é obrigatório");
    }

    if (!(await TasksService.existTaskById(id))) {
      throw new Error("Id não localizado");
    }

    await TasksService.deleteTask(id);

    res.end();
  } catch (err) {
    next(err);
  }
}

async function getTask(req, res, next) {
  let id = req.params.id;
  try {
    if (!(await TasksService.existTaskById(id))) {
      throw new Error("Id não localizado");
    }

    res.send(await TasksService.getTask(id));
  } catch (err) {
    next(err);
  }
}

async function updateTask(req, res, next) {
  try {
    let id = req.params.id;
    let task = req.body;
    console.log("id");
    console.log(id);
    console.log("task.tittle");
    console.log(task.title);
    if (!id || !task.title) {
      throw new Error("Id e Título são obrigatórios");
    }

    if (!(await TasksService.existTaskById(id))) {
      throw new Error("Id não localizado");
    }

    task = await TasksService.updateTask(id, task);

    res.send(task);
  } catch (err) {
    next(err);
  }
}

export default { get, post, deleteTask, getTask, updateTask };
