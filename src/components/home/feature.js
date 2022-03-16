import React, { useEffect, useMemo, useState } from 'react';

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

export const featureData = [
  {
    image: image1,
    title: "Modern Design"
  },
  {
    image: image2,
    title: "Clean and Elegant"
  },
  {
    image: image3,
    title: "Great Support"
  },
  {
    image: image4,
    title: "Easy to customise"
  },
  {
    image: image5,
    title: "hello Features"
  },
  {
    image: image6,
    title: "Ly test"
  },
  ];
  
  function AppFeature(props) {

    const [data, setData] = useState(props.initValue);
    console.log('AppFeature render');

    const memoData = useMemo(() =>{
      console.log('memoData')
      return props.initValue;
    })

    return (
      <div id="feature" className="block featureBlock bgGray">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Key Features and Benefits</h2>
            <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
          </div>
          <Row gutter={[16, 16]}>
            {memoData.map((item, index) => 
              {
                  return (
                    <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                    <Card
                      hoverable
                      cover={<img alt={item.title} src={item.image} />}
                    >
                      <Meta title={item.title} />
                    </Card>
                  </Col>
                
                  )
  
              })}
          </Row>
    
        </div>
      </div>
    );
  }
  
export default AppFeature;