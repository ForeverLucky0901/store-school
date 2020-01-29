import { observable } from 'mobx';

class user {
    title = 'user';
    @observable productList = []
}
export default new user()