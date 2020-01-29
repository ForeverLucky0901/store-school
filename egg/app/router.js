'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //登录
  router.post('/login', controller.home.login);
  //注册
  router.post('/apply', controller.home.apply);
  //添加图片
  router.post('/add', controller.home.add);
  //删除图片
  router.post('/delete', controller.home.delete);
  //轮播图
  router.post('/carousel', controller.home.carousel);
  //轮播图增
  router.post('/carousel/add', controller.home.addFn);
  //轮播图删
  router.post('/carousel/delete', controller.home.deleteFn);
  //轮播图改
  router.post('/carousel/change', controller.home.changeFn);
  //导航类型请求
  router.post('/nav/type', controller.home.typeFn);
  //商品列表
  router.post('/store/list', controller.home.listFn);
  router.post('/store/add', controller.home.storeAdd);
  router.post('/store/delete', controller.home.storeDelete);
  router.post('/store/update', controller.home.storeUpdate);
  router.post('/store/types', controller.home.storeTypes);
  //分类列表
  router.post('/devide/list', controller.home.devideList);
  router.post('/devide/list2', controller.home.devidelist2);
  //地址列表
  router.post('/address/list', controller.home.addressList);
  //添加地址界面
  router.post('/add/address', controller.home.addAddress);
  //商品订单列表
  router.post('/order/list', controller.home.orderList);
  
  
};
