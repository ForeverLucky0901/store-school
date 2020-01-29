import request from '../utils/utils';
import { baseUrl } from '../config/index';

export function getCarouselList() {
    const url = baseUrl + "/carousel/list";
    return request.get(url)
}