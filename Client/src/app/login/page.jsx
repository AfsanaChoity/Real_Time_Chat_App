'use client'
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const loginPage = () => (
  <div className='pt-20 '>
    <div className='py-10 text-center'>
      <h2 className='text-2xl'>Login</h2>
    </div>

    <div className='flex justify-center'>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
          label="Email"
          name="email"
          rules={[{type: 'email', required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>



    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>

    {/* foot note */}
    <div className='text-center'>
      <p>Do not have account? 
        <Link href="/sign-up" className='text-blue-700'>Sign up</Link> </p>
    </div>
  </div>
);
export default loginPage;