'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const user = await ctx.service.home.searchUser();
    ctx.body = user;
  }
}

module.exports = HomeController;
