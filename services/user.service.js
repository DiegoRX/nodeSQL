import { Boom } from '@hapi/boom';
import { pool } from '../libs/postgres.Pool.js';
import { User } from '../db/models/user.model.js';
class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }

  async create(data) {
    return data;
  }

  async find() {

    const rta = await User.findAll()
    return rta
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

export default UserService;
