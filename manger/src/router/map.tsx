import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';

const RouterView = ({ routes }: any) => {
  let routeArr = routes.filter((item: any) => !item.redirect);
  let redirectArr = routes.filter((item: any) => item.redirect);
  return (
    
    
      <Switch>
      {
        routeArr.map((item: any, key: number) => {
          return <Route key={key} path={item.path} render={
            (props) => <item.component {...props} routes={item.children}></item.component>
          }></Route>
        }).concat(redirectArr.map((item: any, key: any) => {
          return <Redirect key={key} from={item.path} to={item.redirect}></Redirect>
        }))
      }
    </Switch>
    
    

  
  )
}
export default RouterView;