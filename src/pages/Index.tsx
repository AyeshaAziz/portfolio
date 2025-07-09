import { useAuth } from "../contexts/SupabaseAuthContext";
import Auth from "../components/Auth";
import Dashboard from "../components/Dashboard";

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
  
  return <Auth />;
};

export default Index;
