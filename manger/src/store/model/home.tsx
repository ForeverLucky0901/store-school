import { observable, action, flow } from 'mobx';
import { getCarouselList } from '../../api/home';

class home {
 
  title = 'home';
  @observable current = new Date().getTime();
  @observable carouselList = []
  _getCarouselList = flow(function* (this:any) {

    const result= yield getCarouselList()
    this.carouselList = result.data.result
  })
}
export default new home();