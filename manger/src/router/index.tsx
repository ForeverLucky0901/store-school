import React from 'react';
import RouterMap from './map';
import Routes from './routes';


interface IRouterView {
  routes?: any[]
}
const RouterView: React.FC<IRouterView> = (props) => {
  const routes = props.routes ? props.routes : Routes;
  return <RouterMap routes={routes} {...props}></RouterMap>
}
export default RouterView;