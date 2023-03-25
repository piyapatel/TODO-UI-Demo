import React from 'react'
import { Col, Row } from 'react-bootstrap-v5'
import LeftComponent from '../components/LeftComponent/LeftComponent'
import RightComponent from '../components/RightComponent/RightComponent'

const Home = () => {
  return (
    <div className='wrapper'>
        <Row className='h-100'> 
            <Col md={3} className="pe-0">
                <LeftComponent/>
            </Col>
            <Col md={9} className="ps-0">
                <RightComponent/>
            </Col>
        </Row>
    </div>
  )
}

export default Home