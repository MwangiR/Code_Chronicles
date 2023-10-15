import { Row, Col, Divider, Button, Form, Input, Card, Image } from 'antd';
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
    <Card
      hoverable
      style={{
        width: '100%',
        padding: '2%',
        margin: '2% 2% 5% 2%',
        backgroundColor: '#F4FAFF',
      }}
      bodyStyle={{
        padding: '10%',
      }}
    >
      <Row gutter={10} align={'center'}>
        <Col className='gutter-row' span={10}>
          <div>
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
          </div>
        </Col>

        <Col span={2} offset={2}>
          <Divider type='vertical' style={{ height: '100%' }} />
        </Col>

        <Col
          className='gutter-row'
          span={10}
          style={{
            paddingLeft: '4%',
          }}
        >
          <Image
            width={500}
            className='sendWrapper'
            src='src\images\Send.png'
            preview={false}
            style={{
              marginTop: -60,
            }}
          />
        </Col>
      </Row>
    </Card>
  );
}
