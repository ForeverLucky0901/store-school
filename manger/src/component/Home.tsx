import * as React from 'react';
import RouterView from "../router/index"
import "./common/common.css"
import { Layout, Menu, Icon } from 'antd';
import { NavLink} from "react-router-dom"
const { Header, Content, Sider } = Layout;
export interface IAppProps {
  routes: any
}

export interface IAppState {
}

class Home extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    //   console.log(this.props)
    let { routes } = this.props
    console.log(this.props, "=======")
    return (
      <div className="home">
        {/* 这是主页面 */}

        <Layout className="laybox">
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">swiper管理</span>
                <NavLink to="/home/index"></NavLink>

              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">商品管理</span>
                <NavLink to="/home/devide"></NavLink>

              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="video-camera" />
                <span className="nav-text">我的管理</span>
                <NavLink to="/home/my"></NavLink>

              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <RouterView routes={routes}></RouterView>
              {/* <Button className="btn" type="primary" onClick={this.showModal.bind(this, 1)}><Icon type="plus-square" />添加新商品</Button> */}
            </Content>
           
          </Layout>
        </Layout>,
      </div>
    );
  }
}
export default Home