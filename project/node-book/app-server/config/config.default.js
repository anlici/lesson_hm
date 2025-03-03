/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path'); // 路径
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1740482442560_5857';

  // add your middleware config here
  config.middleware = [];
  // 安全性
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']
  }
  // 加密
  config.jwt = {
    secret: '!%shunwuyu123$'
  }
  // 文件指定
  config.multipart = {
    mode: 'file',
    fileSize: '500kb',
    whitelist: ['.jpg', '.jpeg', '.png']
  }
  // 数据库
  exports.sequelize = {
    dialog: 'mysql',
    host: 'localhost',
    port: '3306',
    database: 'zhangben',
    username: 'root',
    password: '123456',
    define: {
      timestamps: false, // 自动生成时间戳
      freezeTableName: true, // 表名不自动加s
      underscored: true, // 驼峰转下划线
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
    static: {
      dir: [
        { prefix: '/public', dir: path.join(appInfo.baseDir, 'app/public') },
      ],
    },
    
  };
};