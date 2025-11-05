'use client'
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'next/link';

const { TextArea } = Input;

const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const SignUpPage = () => (
  <div className='pt-20 '>
    <div className='py-10 text-center'>
      <h2 className='text-2xl'>Sign Up</h2>
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
    // className={`text-white!`}
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[{type: 'email', required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Form.Item>

    {/* <Form.Item
    label="Bio"
    name="bio"
    rules={[{ required: true, message: 'Please input your bio!' }]}>
       <TextArea rows={4} />
    
    </Form.Item> */}

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    {/* <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>

    {/* foot note */}
    <div className='text-center'>
      <p>Already have an account? 
        <Link href="/login" className='text-blue-700'>Sign in</Link> </p>
    </div>
  </div>
);
export default SignUpPage;