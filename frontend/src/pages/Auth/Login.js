import { useState } from "react";
import axios from "axios";
import {Button, Form} from 'react-bootstrap';
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }  
  
  const handleSubmit = async (e) => {
    const email = formData.email;
    const password = formData.password;
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/")
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <div className='sig-div'>
      <Form className='form' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleInputChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Show password" />
        </Form.Group>
        <Button variant="primary" type="submit" className='btn-register'>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
