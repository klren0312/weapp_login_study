'use strict';

const Controller = require('egg').Controller;

class NpmController extends Controller {
  async index() {
    const ctx = this.ctx;
    // 请求一个npm模块信息
    const result = await ctx.curl('https://registry.npm.taobao.org/egg/latest', {
      dataType: 'json',
      timeout: 3000,
    });

    ctx.body = {
      status: result.status,
      headers: result.headers,
      package: result.data,
    };
  }
  async get() {
    const ctx = this.ctx;
    const result = await ctx.curl('https://httpbin.org/get?foo=bar', {
      dataType: 'json',
    });
    ctx.status = result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }
  async post() {
    const { ctx } = this;
    const result = await ctx.curl('https://httpbin.org/post', {
      method: 'POST',
      contentType: 'json',
      data: {
        hello: 'world',
        now: Date.now(),
      },
      dataType: 'json',
    });
    ctx.body = result.data;
  }
}

module.exports = NpmController;
