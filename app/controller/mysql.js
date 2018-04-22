'use strict';

const Controller = require('egg').Controller;

class MysqlController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await ctx.service.data.getData();
    ctx.body = result;
  }
}

module.exports = MysqlController;
