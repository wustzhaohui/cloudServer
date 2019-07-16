'use strict';
const Service = require('egg').Service;
class HomeService extends Service {
    async insertUser(parameter = { name: '', nikeName: '', birth: '' }) {
        if (!parameter.name) {
            return '姓名不能为空';
        }
        if (!parameter.nikeName) {
            return '昵称不能为空';
        }
        if (!parameter.birth) {
            return '生日不能为空';
        }
        try {
            await this.app.mysql.insert('USER', parameter);
            return '插入成功';
        } catch (e) {
            return e;
        }
    }
    async searchUser() {
        try {
            const user = await this.app.mysql.query(
                'select * from USER',
                ''
            );
            return user;
        } catch (e) {
            return '连接服务器超时';
        }
    }
}
module.exports = HomeService;
