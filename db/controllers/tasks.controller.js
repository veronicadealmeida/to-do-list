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

// async function post(req, res, next) {
//   let title = req.body.title;
//   let status = req.body.status;
//   let description = req.body.description;
//   let dateLimit = req.body.dateLimit;
//   let dateDone = !req.body.dateLimit;
//   let category = !req.body.category;

//   try {
//     res
//       .status(201)
//       .json(
//         await tasksService.post(
//           title,
//           status,
//           description,
//           dateLimit,
//           dateDone,
//           category
//         )
//       );
//   } catch (err) {
//     next(err);
//   }

export default { get, post };
