'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = this.ctx.helper.relativeTime('152439342');
  }
}

module.exports = HomeController;
