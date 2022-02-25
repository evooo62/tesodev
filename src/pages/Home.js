import React, { useEffect, useState } from "react";
import images from "../images/tesodev-img.PNG";
import Image from "react-bootstrap/Image";
import {Col, Input, Row, Table  } from "antd";



function Home() {
  
 const[list,setList] = useState([]);
 
  
  useEffect(async()=>{
    try {
      let json = require('../json/mockData.json');
      setList([json.data]);
      console.log(list, 'the json obj');
    } catch (error) {
      console.log('err', error);
    };
    
  },[]);

  const columns = [
    {
      title: "Name",
      dataIndex: "0",
      key: "name",
    },
    {
      title: "Company",
      dataIndex: "1",
      key: "company",
    },
    {
      title: "Email",
      dataIndex: "2",
      key: "email",
    },
    {
      title: "Date",
      dataIndex: "3",
      key: "date",
    },
    {
      title: "Country",
      dataIndex: "4",
      key: "county",
    },
    {
      title: "City",
      dataIndex: "5",
      key: "city",
    },
  ];

  return (
    <>
     
      <Row justify="center" align="middle">
        <Col>
          <Image src={images} alt="Girl in a jacket" width={500} height={200} />
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={10}>
          <Input placeholder="Evren"></Input>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col >
        <Table dataSource={list[0]} columns={columns} />;
        </Col>
      </Row>
    
      
     
    </>
  );
}

export default Home;
