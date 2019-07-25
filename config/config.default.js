/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1557592910698_687';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        myAppName: 'egg'
    };
    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: '101.132.129.249',
            // 端口号
            port: '3306',
            // 用户名
            user: 'hui',
            // 密码
            password: '19940823',
            // 数据库名
            database: 'cloudMusic'
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false
    };
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        domainWhiteList: ['*']
    };

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    return {
        ...config,
        ...userConfig
    };
};
