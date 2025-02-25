/**
 * @param {Egg.Application} app - egg application
 */
// commonjs 模块  restful 一个路由对应一个方法
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/post',controller.post.index);
};
