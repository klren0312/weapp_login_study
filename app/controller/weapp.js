'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');
// 加密session_key
function encryptSha1(data) {
  return crypto.createHash('sha1').update(data,'utf8').digest('hex');
}
// 解密用户数据
function decodeUserInfo(key,iv,crypted) {
  crypted = new Buffer(crypted, 'base64')
  key = new Buffer(key, 'base64')
  iv = new Buffer(iv, 'base64')
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv)
  let decoded = decipher.update(crypted, 'base64', 'utf8')
  decoded += decipher.final('utf8')
  return decoded
}
class WeappController extends Controller {
  async getSessionKey(code) {
    let appid = 'wxefe389c79a8fec0f';
    let secret = '1d72d78208549bbe21bf4d9a40736f7e';
    let grant_type = 'authorization_code';
    let wecode = code;
    // 登录接口地址
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${wecode}&grant_type=${grant_type}`;
    // 请求登录接口
    const result = await this.app.curl(url,{
      dataType:'json'
    });
    return result.data.session_key;
  }
  async login() {
    let {ctx} = this;
    let {crypted,iv,signature,code} = ctx.request.body;
    let key = await this.getSessionKey(code);
    // 加密session_key 传给客户端
    let skey = encryptSha1(key)
    // 解密用户信息，可以将其存入数据库
    let decode = JSON.parse(decodeUserInfo(key,iv,crypted))
    console.log(decode)
    ctx.body = {
      skey: skey
    }
  }
}

module.exports = WeappController;
