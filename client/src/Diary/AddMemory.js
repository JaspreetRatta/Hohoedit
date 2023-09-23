import React, { useState } from 'react';
import { Button, Form, Input, DatePicker, message, Upload, Typography, Card, Tooltip } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UploadOutlined, InfoCircleOutlined } from '@ant-design/icons';

import heroimg11 from "../resourses//images/hero-img11.jpg";

const { TextArea } = Input;
const { Title } = Typography;

function AddMemory() {
  const navigate = useNavigate();
  const [memory, setMemory] = useState({
    title: '',
    location: '',
    date: '',
    description: '',
    images: [],
  });

  const handleChange = (e) => {
    setMemory({ ...memory, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/memories', values);
      console.log('Memory created:', response.data);
      message.success(response.data.message);
    } catch (error) {
      console.error('Error creating memory:', error);
      message.error(error.message);
    }
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'left', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '600px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <Title level={2}>Add Memory</Title>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input the title!' }]}>
            <Input placeholder="Title" />
          </Form.Item>

          <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please input the location!' }]}>
            <Input placeholder="Location" />
          </Form.Item>

          <Form.Item label="Date" name="date">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input the description!' }]}>
            <TextArea rows={4} placeholder="Description" />
          </Form.Item>

          <br></br>
      <br></br>
          <Form.Item label={
            <span>
              Upload Images&nbsp;
              <Tooltip title="Supported formats: jpg, jpeg, png. Maximum size: 9MB.">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            </span>
          } name="images">
            
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            
          </Form.Item>
          <br></br>
          <br></br>
          <Form.Item>
            <Button type="black"  htmlType="submit" >Add Memory</Button>
          </Form.Item>

          <br></br>
          <div className="d-flex justify-content-between align-items-center my-3">
            <Link to="/client/src/Diary/MemoryList">My MemoryList</Link>
          </div>
        </Form>
      </Card>
    
      <img 
      
      src={heroimg11} alt="" 
      style={{ padding: '0rem', width: '30%', height: 'auto', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',justifyContent: 'center', borderRadius: '20px' }
    } 
    />
    </div>
  );
}

export default AddMemory;
