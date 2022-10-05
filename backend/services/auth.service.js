import AuthRepository from "../repositories/auth.repository.js";

async function get(req, _res, _next) {
  return await AuthRepository.get();
}

export default {
  get,
};
