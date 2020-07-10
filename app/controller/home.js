/*
 * @Author: zhaohui
 * @Date: 2019-10-28 11:30:24
 * @LastEditTime: 2020-05-19 17:13:01
 * @LastEditors: zhaohui
 * @Description: 
 * @FilePath: /cloudServer/app/controller/home.js
 */ 
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.cookies.set('test-hui', 'egg_test_1557592910698_687', { sameSite: 'None' });
    const user = await ctx.service.home.searchUser();
    ctx.body = user;
  }
}

module.exports = HomeController;
