const Service = require('egg').Service;
const md5 = require("md5")
class UserService extends Service {
    async devidelist2()
    {
        let result=await this.app.mysql.select("devidelist")
        return result
    }
    async addAddress({ name, tel, address }) {
        let result = await this.app.mysql.insert("address", { name, tel, address })
        return result
    }
    async orderList(item) {
        // let {
        //     good_id,
        //     good_name,
        //     good_price,
        //     good_type,
        //     good_img,
        //     good_desc,
        //     count
        // } = item
        // console.log(item)
        // let result = await this.app.mysql.insert("orderlist", {
        //     roleid: good_id,
        //     name: good_name,
        //     price: good_price,
        //     count: count
        // })
        // return result
    }
    async addressList() {
        let result = await this.app.mysql.select("address")
        return result
    }
    async devideList() {
        let result = await this.app.mysql.select("Devide")
        return result
    }
    async typeFn() {
        let result = await this.app.mysql.select("good_types")
        return result
    }
    async listFn() {
        let result = await this.app.mysql.select("goods_price")
        return result
    }
    async storeAdd({  good_price, good_type, good_img, good_desc, salecount, singlecheck, status, saleout, good_name }) {
        // console.log(good_name, good_price, good_type, good_img, good_desc)
        let result = await this.app.mysql.create("goods_price", {  good_price, good_type, good_img, good_desc, salecount, singlecheck, status, saleout, good_name })
        return result
    }
    async storeDelete({ good_id }) {
        console.log(good_id * 1)
        let result = await this.app.mysql.delete("goods_price", { good_id })
        return result
    }
    async storeUpdate({ good_id, good_price, good_type, good_img, good_desc, salecount, singlecheck, status, saleout, good_name }) {
        const row = {
            good_price,
            good_type,
            good_img,
            good_desc,
            salecount,
            singlecheck,
            saleout,
            status,
            good_name
        };
        console.log(row)
        const options = {
            where: {
                good_id: good_id
            }
        };
        let result = await this.app.mysql.update("goods_price", row, options)
        return result
    }
    async add({ carousel_id, carousel_img, carousel_tit, carousel_des, carousel_type }) {
        let result = await this.app.mysql.create("carousel", { carousel_id, carousel_img, carousel_tit, carousel_des, carousel_type })
        return result
    }
    async delete(carousel_id) {
        let result = await this.app.mysql.delete("carousel", { carousel_id })
        return result
    }
    async login(data) {
        let { name, password } = data;
        // let $sql = 'select * from userlist where name=? and password=?'
        let result = await this.app.mysql.get('userlist', { name, password });

        // console.log(result)
        return result

    }
    async apply(name, password) {
        let pwd = md5(password)
        // console.log(pwd)
        let result = await this.app.mysql.query("insert into userlist (name,password) values(?,?)", [name, pwd])
        return result
    }
    async existen(name) {
        let result = await this.app.mysql.get("userlist", { name })
        return result
    }
    async carousel() {
        let result = await this.app.mysql.select("carousel")
        return result
    }
    async addFn({ carousel_img, carousel_tit, carousel_des, carousel_type }) {

        let result = await this.app.mysql.insert("carousel", { carousel_img, carousel_tit, carousel_des, carousel_type })
        return result
    }
    async storeTypes() {
        let result = await this.app.mysql.select("good_types")
        // console.log(result)
        return result
    }
    async deleteFn({ carousel_id }) {
        let result = await this.app.mysql.delete("carousel", { carousel_id })
        return result
    }
    async changeFn({ carousel_id, carousel_img, carousel_tit, carousel_des, carousel_type }) {
        const row = {
            carousel_img, carousel_tit, carousel_des, carousel_type
        };
        const options = {
            where: {
                carousel_id: carousel_id
            }
        };
        let result = await this.app.mysql.update("carousel", row, options)
        return result
    }
}

module.exports = UserService;