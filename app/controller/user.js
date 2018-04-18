'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const {ctx} = this;
    ctx.body = {name:`hi, klren ${ctx.params.id}`};
  }

  async info() {
    const {ctx} = this;
    ctx.body = `user: ${ctx.params.id}, ${ctx.params.name}`;
  };
}

module.exports = UserController;
