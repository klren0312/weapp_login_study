'use strict';
module.exports = app => {
  class Controller extends app.Controller {
    async ping() {
      const { ctx } = this;
      const message = ctx.args[0];
      ctx.socket.emit('chat', `${message}`);
      // ctx.socket.broadcast.emit('res',`I've got your message: ${message}`)
      setInterval(function() {
        ctx.socket.emit('res', 'test message');
      }, 1000);
    }
    async disconnect() {
      const message = this.ctx.args[0];
      console.log(message);
    }
  }
  return Controller;
};
