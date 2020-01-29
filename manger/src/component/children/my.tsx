import * as React from 'react';

export interface IAppProps {
}

export interface IAppState {
}

 class My extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        这是我的页面
      </div>
    );
  }
}

export default My