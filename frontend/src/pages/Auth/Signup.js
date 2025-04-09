import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password } = formData;
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        email,
        name,
        password,
      });
      console.log("Signup successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
    } finally {
      setFormData({
        email: "",
        name: "",
        password: ""
      });
    }
  };

  return (
    <div className='sig-div'>
      <Form className='form' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="Enter email" 
            value={formData.email} 
            onChange={handleInputChange} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleInputChange} 
            autoComplete="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleInputChange} 
          />
        </Form.Group>
        <Button variant="primary" type="submit" className='btn-register'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
