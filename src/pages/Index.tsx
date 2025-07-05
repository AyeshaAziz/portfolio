
import { useAuth } from "../contexts/AuthContext";
import LoginPage from "../components/LoginPage";
import PortfolioDashboard from "../components/PortfolioDashboard";

const Index = () => {
  const { isAuthenticated } = useAuth();

  // Always show login form first, then portfolio if authenticated
  if (isAuthenticated) {
    return <PortfolioDashboard />;
  }

  return <LoginPage />;
};

export default Index;
