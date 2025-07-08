import { useAuth } from "../contexts/AuthContext";
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/Dashboard";

const Index = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Dashboard />;
  }
  return <LoginPage />;
};

export default Index;
