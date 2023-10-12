import { Row, Col, Divider, Button, Form, Input } from 'antd';
import { useState } from 'react';

export default function About() {
  const [form] = Form.useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [introduction, setIntroduction] = useState('');

  const onFinish = (values) => {
    setName(values.name);
    setEmail(values.email);
    setIntroduction(values.introduction);

    const contactInfo = {
      name: name,
      email: email,
      introduction: introduction,
    };

    console.log('Contact Info', contactInfo);
    setTimeout(() => {
      form.resetFields();
    }, 2000);
  };

  return (
    <div className='contactForm'>
      <Row justify={'center'} align='middle'>
        <Col span={16} style={{ marginTop: '1%' }}>
          <Form labelCol={{ span: 5 }} form={form} onFinish={onFinish}>
            <Form.Item
              name='name'
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
              label='Name'
            >
              <Input placeholder='John Doe' style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
              label='Email'
            >
              <Input placeholder='johndoe@email.com' style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item name='introduction' label='Introduction'>
              <Input.TextArea style={{ height: '200px' }} />
            </Form.Item>
            <Divider />
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button block htmlType='submit' type='primary' size='large'>
                Submit
              </Button>
            </Form.Item>
          </Form>
          {/* <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Introduction: {introduction}</p>
          </div> */}
        </Col>
      </Row>
    </div>
  );
}
