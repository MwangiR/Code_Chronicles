import { Row, Col, Divider } from 'antd';
import { Button, Form, Input } from 'antd';

export default function About() {
  return (
    <div>
      <Row justify='center'>
        <Col span={18} flex={3} style={{ marginTop: '1%' }}>
          <Form>
            <Form.Item label='Name'>
              <Input placeholder='John Doe' style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item label='Email'>
              <Input placeholder='johndoe@email.com' style={{ height: '50px' }} />
            </Form.Item>
            <Form.Item label='Introduction'>
              <Input.TextArea style={{ height: '200px' }} />
            </Form.Item>
            <Divider />
            <Form.Item>
              <Button type='primary' size='large' shape='round'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
