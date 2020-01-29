import * as React from 'react';

import { Row, Col, Slider, Button, Icon, Modal, Input, Upload, message } from 'antd';
import "./index/index.css"
import request from '../../utils/utils'
import "../common/common.css"
export interface IAppProps {
}

export interface IAppState {
  list: any,
  ModalText: any,
  visible: any,
  confirmLoading: any,
  loading: any,
  imageUrl: any

}
function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
class Index extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      list: [],
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      loading: false,
      imageUrl: ""
    }
  }
  public handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      // getBase64((info.file.originFileObj:any, imageUrl:any) =>
      //   this.setState({
      //     imageUrl,
      //     loading: false,
      //   }),
      // );
    }
  };
  public componentDidMount() {
    let { list } = this.state
    request.post('/carousel').then(({ data }) => {
      console.log(data.result);
      this.setState({ list: data.result })
    });
  }
  public showModal = () => {
    this.setState({
      visible: true,
    });
  };

  public handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  public handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  public render() {
    let { list, visible, confirmLoading, ModalText, imageUrl } = this.state
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="gutter-example">
        <Button type="primary" className="btn" onClick={this.showModal}>添加banner</Button>
        <Row gutter={16}>
          {
            list.map((item: any, index: any) => {
              return <Col className="gutter-row" span={6} key={index}>

                <div className="gutter-box">

                  <img src={item.carousel_img} alt="" />
                  <br />
                  <br />
                  <br />
                  <div className="icon">

                    <Icon type="arrow-down" onClick={() => {
                      console.log("下载")
                      console.log(item.carousel_type)
                      // request.post("")
                    }} />
                    <Icon type="share-alt" onClick={() => {
                      console.log("分享")
                    }} />
                    <Icon type="edit" onClick={() => {
                      console.log("编辑")
                    }} />
                    <Icon type="ordered-list" onClick={() => {
                      console.log("更多")
                    }} />
                   
                  </div>

                </div>
              </Col>
            })
          }
          <Modal className="model"
            title="Title"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={this.handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%',margin:'0 auto' }} /> : uploadButton}
            </Upload>
            活动标题
            <Input placeholder="Basic usage" />
            起止时间
            <Input placeholder="Basic usage" />
            活动链接
            <Input placeholder="Basic usage" />

          </Modal>
          {/* <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col> */}
        </Row>

      </div>
    );
  }
}
export default Index