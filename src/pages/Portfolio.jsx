import { Card, Col, Row } from 'antd';
import PortfolioList from '../components/PortfolioList';

export default function Home() {
  return (
    <Card
      hoverable
      style={{
        width: '100%',
        padding: '1%',
        margin: '1% 1% 5% 1%',
        overflowY: 'auto',
      }}
      bodyStyle={{
        padding: 0,
      }}
    >
      <Row gutter={16}>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='AccessAid'
              gitURL='https://github.com/MwangiR/AccessAid.git'
              description='Access Aid is a client-centric organization dedicated to enhancing the quality of care for individuals in need of support'
              src='./healthcare.jpg'
            />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='Advertir'
              gitURL='https://github.com/MwangiR/Advertir.git'
              description='Contact Tracing Java Application: Advertir is a travel companion that utilised contact tracing to notify you when you were in close contact '
              src='./advertir.jpg'
            />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='Spotify Gig Finder'
              gitURL='https://github.com/MwangiR/Group1_Project.git'
              description='The following application displays concerts that are near you with regards to your liked songs'
              src='./spotify.jpg'
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '1%' }}>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='ViewPoint'
              gitURL='https://github.com/MwangiR/View_Point.git'
              description='Viewpoint combines Movies, TV Shows and Game review all in one spot as well as provide top 10 in each genre'
              src='./review.jpg'
            />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='PostCraft'
              gitURL='https://github.com/MwangiR/PostCraft.git'
              description='PostCraft is a blogging application built on handlebars to enable communities to share their thoughts'
              src='./blog.jpg'
            />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='LinkMate'
              gitURL='https://github.com/MwangiR/LinkMate.git'
              description='LinkMate is a Social Network API is a backend application that empowers social networking platforms to manage user profiles, posts, and interactions seamlessly. It utilises NoSQL(MongoDB)'
              src='./social.jpg'
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
