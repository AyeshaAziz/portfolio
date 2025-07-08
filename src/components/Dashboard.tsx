
import Header from './Header';
import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Dashboard;
