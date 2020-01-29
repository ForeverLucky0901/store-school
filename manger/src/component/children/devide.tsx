import * as React from 'react';

import 'antd/dist/antd.css';
import "../common/common.css"
import { Table, Modal, Form, Input, Button, Popconfirm, message } from 'antd';
import request from "../../utils/utils"


export interface IAppProps {
  form: any
}

export interface IAppState {
  datalist: any,
  collapsed: any,
  visible: any,
  columns: any,
  obj: any,
  confirmLoading: any

}


function onChange(value: any) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}



function onSearch(val: any) {
  console.log('search:', val);
}
class goodMange extends React.Component<IAppProps, IAppState> {
  public confirm(e: any, id: any) {
    console.log(e);
    message.success('删除成功');
    this.deleteFn(id)

  }
  public cancel(e: any) {
    console.log(e);
    message.error('Click on No');
  }
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      collapsed: false,
      datalist: [],
      visible: false,
      confirmLoading: false,
      obj: {
        good_id: "",
        good_price: "",
        good_type: "",
        good_img: "",
        good_desc: "",
        salecount: "",
        singlecheck: "",
        outtime: "",
        saleout: "",
        status: "",
        good_name: ""
      },
      columns: [
        {
          title: '商品名称',
          dataIndex: 'good_name',
          key: 'good_name',

        },
        {
          title: '价格',
          dataIndex: 'good_price',
          key: 'good_price',
        },
        {
          title: '销量',
          dataIndex: 'salecount',
          key: 'salecount',
        },
        {
          title: '库存',
          dataIndex: 'saleout',
          key: 'saleout',
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: '更新时间',
          dataIndex: 'outtime',
          key: 'outtime',
        },
        {
          title: '操作',
          key: 'action',
          render: (text: any, record: any) => (
            <span>

              {/* <Button type="primary" onClick={this.deleteFn.bind(this, record.good_id)}>删除</Button> */}
              <Popconfirm
                title="确定要删除吗?"
                onConfirm={this.confirm.bind(this, record.good_id)}
                onCancel={this.cancel}
                okText="是"
                cancelText="否"
              >
                <Button type="primary">删除</Button>
              </Popconfirm>,
                          &nbsp;
              <Button type="danger" onClick={this.showModal.bind(this, record)}>
                编辑
                </Button>
            </span>
          ),
        },
      ]
    }
  }
  public deleteFn(good_id: any) {
    console.log(good_id)
    request.post("/store/delete", { good_id }).then(({ data }) => {
      console.log(data)
      this.componentDidMount()
    })
  }
  public componentDidMount() {
    request.post("/store/list").then(({ data }) => {
      // console.log(data.result)
      this.setState({ datalist: data.result })
      console.log(data.result)
      // console.log(this.state.datalist)
    })
  }
  public onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  public showModal = (val: any) => {
    // alert(22222222222)
    this.setState({
      visible: true,
      obj: val
    });
  };

  public handleOk = (e: any) => {
    // console.log(e);
    console.log(this.state.obj)

    this.setState({
      visible: true,
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({ confirmLoading: false, visible: false })
      // let { good_id, good_price, good_type, good_img, good_desc, salecount, singlecheck, outtime, saleout, status, good_name } = this.state.obj
      var obj = this.state.obj
      request.post("/store/update", { ...obj }).then(({ data }) => {
        console.log(data)
        this.componentDidMount()
      })
    }, 2000)

  };

  public handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  public handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  public render() {
    let { datalist, columns, obj, confirmLoading } = this.state
    const { getFieldDecorator } = this.props.form;

    let { good_id, good_price, good_name, good_type, good_img, good_desc, salecount, outtime, saleout, status } = obj;
    return (
      <div>
        <button className="btn2" onClick={()=>{
          console.log(111111111111)
        } }>添加</button>
        <Modal
          title="商品信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          confirmLoading={confirmLoading}
        >
          商品名称
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.good_name = e.target.value;
              this.setState({ obj })
            }}
            value={good_name} />
          商品id
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.good_price = e.target.value;
              this.setState({ obj })
              console.log(obj.good_id, '123')
            }}
            value={good_id} />
          商品价格
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.good_price = e.target.value;
              this.setState({ obj })
              console.log(obj.good_price, '123')
            }}
            value={good_price} />
          商品类型
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.good_type = e.target.value;
              this.setState({ obj })
            }}
            value={good_type} />
          商品图片
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.good_img = e.target.value;
              this.setState({ obj })
            }}
            value={good_img} />
          商品描述
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.good_desc = e.target.value;
              this.setState({ obj })
            }}
            value={good_desc} />
          销售数量
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.salecount = e.target.value;
              this.setState({ obj })
            }}
            value={salecount} />
          过期时间
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.outtime = e.target.value;
              this.setState({ obj })
            }}
            value={outtime} />
          销售数量
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.saleout = e.target.value;
              this.setState({ obj })
            }}
            value={saleout} />
          状态
                <Input placeholder="Basic usage"
            onChange={(e: any) => {
              let obj = this.state.obj;
              obj.status = e.target.value;
              this.setState({ obj })
            }}
            value={status} />
        </Modal>
        <Table rowKey={good_id} columns={columns} dataSource={datalist} />
      </div>
    );
  }
}

export default Form.create({ name: 'normal_login' })(goodMange)