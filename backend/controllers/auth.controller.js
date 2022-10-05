import AuthService from "../services/auth.service.js";

async function get(req, res, next) {
  try {
    res.send(await AuthService.get(req, res, next));
  } catch (err) {
    next(err);
  }
}

export default { get };
