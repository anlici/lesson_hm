'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize; // 引入数据类型,orm? 

  const User = app.model.define('user', {
    id: { 
      type: INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    username: STRING(100),
    ctime: STRING(100),// string类型
    avatar: STRING(100),
    signature: STRING(100),
    password: STRING(100)
  })

  return User;
}