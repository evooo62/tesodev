import React, { useEffect, useState } from "react";
import images from "../images/tesodev-img.PNG";
import Image from "react-bootstrap/Image";
import { Col, Input, Row, Table } from "antd";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";

function Home() {
  
 const[list,setList] = useState([]);
  
  useEffect(async()=>{
    try {
      let json = require('../json/mockData.json');
      setList([json]);
      console.log(json.data, 'the json obj');
    } catch (error) {
      console.log('err', error);
    };
  },[]);

  return (
    <>
      {/* Hello world */}
      <Row justify="center" align="middle">
        <Col>
          <Image src={images} alt="Girl in a jacket" width={500} height={200} />
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={10}>
          <Input></Input>
        </Col>
      </Row>
      
      <Table>
          <ColumnGroup>
          {list.map((item)=>{
            return (
              <Column key={item.id}>
              {item.city}
              </Column>
            )
          })}
         
          </ColumnGroup>
      </Table>
    </>
  );
}

export default Home;
