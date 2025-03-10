
// model orm 不写sql 对象关系映射
module.exports = app => {
    // 插件配置
    const {STRING,INTEGER} = app.Sequelize; // 导入数据类型
    const Bill = app.model.define('bill',{
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pay_type: INTEGER,
        amount: STRING(100),
        date: STRING(100),
        type_id: INTEGER,
        type_name: STRING(100),
        remark: STRING(100)
    });

}