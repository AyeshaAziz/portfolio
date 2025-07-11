import { useAuth } from "../contexts/AuthContext";
import Auth from "../components/Authx";
import Dashboard from "../components/Dashboard";
import Login from "@/components/Login";

const Index = () => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }
  
  if (user) {
    return <Dashboard />;
  }
  
  return <Login />;
};

export default Index;
