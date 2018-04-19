'use strict';

const Controller = require('egg').Controller;
const createRule = {
  username: {
    type: 'email',
  },
  password: {
    type: 'password',
    compare: 're-password',
  }
}
class UserController extends Controller {
  async index() {
    const {ctx} = this;
    ctx.body = {name:`hi, klren ${ctx.params.id}`};
  }

  async info() {
    const {ctx} = this;
    ctx.body = `user: ${ctx.params.id}, ${ctx.params.name}`;
  };

  async check() {
    const {ctx} = this;
    try{
      ctx.validate(createRule);
      ctx.body = ctx.request.body;
    } catch(e){
      console.log(e);
      ctx.body = {
        errors: e.errors
      }
    }
 
  }
}

module.exports = UserController;
