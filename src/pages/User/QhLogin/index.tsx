import React, { useState } from 'react';
import { history, SelectLang } from '@umijs/max';

import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { createStyles } from 'antd-style';

import './index.less'
import LogoPng from '@/assets/images/login_logo.png'


const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});
const Lang = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.lang} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};



const QhLogin: React.FC = () => {

  const onFinish = async (values: any) => {
    console.log(values);
    localStorage.setItem('umi_locale', 'zh-CN')
    history.push('/adeng');
    return;
  }

  return (
    <>
      <div className="qh_login">
        <div className="from">
          <div className="title">
            <div className="logo"><img src={LogoPng} alt="" /><div className="lang"><Lang /></div></div>
            <div className="tit">TANGO OMSS</div>
            <div className="intro">Operations Management Support System</div>
          </div>
          <Form name="login" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input prefix={<LockOutlined />} type="password" placeholder="Password" size="large" />
            </Form.Item>
            <Form.Item >
              <Button type="primary" size="large" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export default QhLogin;