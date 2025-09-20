import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin, MapPin } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center z-10 animate-fade-in-up">

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Ankita Kaushik
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
          Full-Stack <span className="text-tech-stack">AI</span> Developer
        </h2>

        {/* Location */}
        <div className="flex items-center justify-center text-muted-foreground mb-8">
          <MapPin className="w-4 h-4 mr-2" />
          <span>Auckland, New Zealand</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
          Motivated full-stack developer with <span className="text-foreground font-semibold">5+ years</span> of web development experience, 
          transitioning into AI engineering. Expertise in <span className="text-primary">React.js</span>, <span className="text-accent">Next.js</span>, 
          <span className="text-tech-stack"> Node.js</span> and <span className="text-experience">Python</span> with hands-on experience 
          developing agentic AI systems and LLM integrations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Get In Touch
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => scrollToSection('experience')}
          >
            View My Work
            <ArrowDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="mailto:ankita.kaushik012@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/ankitakaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/Ankita012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-tech-stack/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;