'use strict';

const Controller = require('egg').Controller;
const md5 = require("md5")
const jwt = require("jsonwebtoken")
class HomeController extends Controller {
  async devidelist2() {
    const { ctx, service } = this
    let result = await service.home.devidelist2(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async addAddress() {
    const { ctx, service } = this
    let result = await service.home.addAddress(ctx.request.body)
    if (result.affectedRows === 1) {
      ctx.body = {
        result,
        msg: "添加成功"
      }
    }

  }
  async orderList() {
    const { ctx, service } = this
    let { list } = ctx.request.body
    // console.log(ctx.request.body,'===========')
    // console.log(list, '===============')
    // let result = await service.home.orderList(list)

    // let newarr = list.forEach((item) => {
    //   return await service.home.orderList(item)
    // })
    // console.log(newarr)
    // ctx.body = {
    //   msg: "111"
    // }


  }
  async addressList() {
    const { ctx, service } = this
    let result = await service.home.addressList(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async devideList() {
    const { ctx, service } = this
    let result = await service.home.devideList(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async typeFn() {
    const { ctx, service } = this
    let result = await service.home.typeFn(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async listFn() {
    const { ctx, service } = this
    let result = await service.home.listFn(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async storeAdd() {
    const { ctx, service } = this
    let result = await service.home.storeAdd(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async storeDelete() {
    const { ctx, service } = this
    let result = await service.home.storeDelete(ctx.request.body)
    console.log(ctx.request.body)
    if (result.affectedRows == 1) {
      ctx.body = {
        result,
        msg: "删除成功"
      }
    } else {
      ctx.body = {
        msg: "此项不出在"
      }
    }

  }
  async storeUpdate() {
    const { ctx, service } = this
    let result = await service.home.storeUpdate(ctx.request.body)
    if (result.affectedRows == 1) {
      ctx.body = {
        result,
        msg: "数据更新成功"
      }
    } else {
      ctx.body = {
        msg: "数据更新失败"
      }
    }

  }
  async carousel() {
    const { ctx, service } = this
    let result = await service.home.carousel()
    ctx.body = {
      result
    }
  }
  async storeTypes() {
    const { ctx, service } = this
    let result = await service.home.storeTypes()
    ctx.body = {
      result
    }
  }
  async addFn() {
    const { ctx, service } = this
    let result = await service.home.addFn(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async deleteFn() {
    const { ctx, service } = this
    let result = await service.home.deleteFn(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async changeFn() {
    const { ctx, service } = this
    let result = await service.home.changeFn(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async add() {
    const { ctx, service } = this
    let result = await service.home.add(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async delete() {
    const { ctx, service } = this
    let result = await service.home.delete(ctx.request.body)
    ctx.body = {
      result
    }
  }
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    let result = await this.app.mysql.select("userlist")
    // console.log(result)
    ctx.body = {
      result
    }
  }
  async login() {
    const { ctx, service } = this
    let result = await service.home.login(ctx.request.body)
    if (result) {
      let token = jwt.sign({ result }, 'shhhhh', { expiresIn: '1h' })
      ctx.body = {
        code: 1,
        result,
        msg: "登录成功",
        token
      }
    }
    else {
      ctx.body = {
        code: -1,
        msg: "登录失败"
      }
    }

  }
  async apply() {
    let { ctx, service } = this
    let { name, password } = ctx.request.body
    let result = await service.home.apply(name, password)
    let flag = await service.home.existen(name)
    // console.log(flag)

    if (flag.name === name) {
      // console.log(1111111111111111)
      ctx.body = {
        msg: "此用户已存在"
      }
    } else if (name && password) {
      if (result.affectedRows == 1) {
        ctx.body =
        {
          result,
          msg: "注册成功"
        }
      }
      else {
        ctx.body =
        {
          msg: "注册失败",
          code: -1
        }
      }
    }
    else {
      ctx.body = {
        msg: "参数不完整"
      }
    }
  }
}

module.exports = HomeController;
