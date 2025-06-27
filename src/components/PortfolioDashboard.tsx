
import React from 'react';
import PortfolioHeader from './PortfolioHeader';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const PortfolioDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <PortfolioHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default PortfolioDashboard;
