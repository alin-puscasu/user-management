import useAuth from '../../assets/useAuth.js';
import {Form} from 'react-bootstrap';

const Profile = () => {
    const { user, loading } = useAuth();

    if (loading) {
      return <div>Încărcare...</div>; 
    }
  
    if (!user) {
      return <div>Nu ești autentificat!</div>;
    }
  
    return (
        <div className='sig-div'>
        <Form className='form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Welcome, {user.name}!</Form.Label>
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>ID user: {user.id}</Form.Label>
          </Form.Group>
        
        </Form>
      </div>
    );
  };
  
export default Profile;
