import { Suspense, lazy } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import About from "./About/About";

const Skills = lazy(() => import("./Skills/Skills"));
const Projects = lazy(() => import("./Projects/Projects"));
const Contact = lazy(() => import("./Contact"));

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Introduction />
      <About />
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Skills />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Projects />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Contact />
      </Suspense>
    </div>
  );
};

export default Dashboard;
