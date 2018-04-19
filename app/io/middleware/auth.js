module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'connected!');
    await next();
    // 断开连接时触发
    console.log('disconnection!');
  }
}