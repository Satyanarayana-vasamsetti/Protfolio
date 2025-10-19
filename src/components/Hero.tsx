import { Download, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    // Replace with actual resume file path
    const link = document.createElement('a');
    link.href = './resume.pdf'; 
    link.download = 'Satyanarayana_Resume.pdf';
    link.click();
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-hero text-white mb-6">
            Hi, I'm <span className="text-gradient">Satyanarayana</span>
          </h1>
          <p className="text-subtitle text-gray-200 mb-4 max-w-2xl mx-auto">
            Java Full Stack Developer
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable, maintainable, and secure web applications 
            with Spring Boot, React, REST APIs, and modern development tools.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button 
              onClick={handleResumeDownload}
              className="btn-hero flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/Satyanarayana-vasamsetti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/satya-narayana-vasamsetti-0b161b2a0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="mailto:satyabanni11851@gmail.com"
              className="text-white hover:text-accent transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-accent transition-colors duration-300 animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;