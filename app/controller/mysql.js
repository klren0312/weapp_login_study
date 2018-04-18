'use strict';

const Controller = require('egg').Controller;

class MysqlController extends Controller {
  async index() {
    let {ctx,service} = this;
    let result = await ctx.service.data.getData()
    ctx.body=result;
  }
}

module.exports = MysqlController;
