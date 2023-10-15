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
              title='Advertir'
              gitURL='https://github.com/MwangiR/Advertir.git'
              description='Contact Tracing Java Application: Advertir is a travel companion that utilised contact tracing to notify you when you were in close contact '
            />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='Spotify Gig Finder'
              gitURL='https://github.com/MwangiR/Group1_Project.git'
              description='The following application displays concerts that are near you with regards to your liked songs'
            />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='ViewPoint'
              gitURL='https://github.com/MwangiR/View_Point.git'
              description='Viewpoint combines Movies, TV Shows and Game review all in one spot as well as provide top 10 in each genre'
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '1%' }}>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='PostCraft'
              gitURL='https://github.com/MwangiR/PostCraft.git'
              description='PostCraft is a blogging application built on handlebars to enable communities to share their thoughts'
            />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='CommerceSync'
              gitURL='https://github.com/MwangiR/CommerceSync.git'
              description='CommerceSync is a E-Commerce backend application that utilizes MySQL (relational database)'
            />
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div>
            <PortfolioList
              title='LinkMate'
              gitURL='https://github.com/MwangiR/LinkMate.git'
              description='LinkMate is a Social Network API is a backend application that empowers social networking platforms to manage user profiles, posts, and interactions seamlessly. It utilises NoSQL(MongoDB)'
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
