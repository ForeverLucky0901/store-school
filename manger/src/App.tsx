import * as React from 'react';
import RouterView from "./router/index"
import routes from './router/routes'
// import "./component/common/common.css"
export interface IAppProps {
}

export interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div className="app">
        <RouterView routes={routes}></RouterView>
      </div>
    );
  }
}
export default App