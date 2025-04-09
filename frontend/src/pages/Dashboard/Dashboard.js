import useAuth from '../../assets/useAuth.js';

const Dashboard = () => {
  const { user, loading } = useAuth(); 
  if (loading) {
    return <div>Încărcare...</div>;
  }

  return (
    <h1>Bine ai venit, {user.name}!</h1>
  );
};

export default Dashboard;
