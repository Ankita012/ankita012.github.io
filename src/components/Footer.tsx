import { Badge } from '@/components/ui/badge';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Ankita Kaushik
            </div>
            <p className="text-muted-foreground max-w-md">
              Full-Stack AI Developer passionate about creating intelligent solutions 
              that bridge the gap between technology and human needs.
            </p>
          </div>

          {/* Tech Stack Highlights */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {[
              'React.js',
              'Next.js', 
              'Node.js',
              'Python',
              'AI/ML',
              'TypeScript',
              'AWS',
              'LiveKit'
            ].map((tech) => (
              <Badge 
                key={tech}
                variant="outline"
                className="text-xs border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Made with Love */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-amber-500" />
            <span>in Auckland, New Zealand</span>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-border/50 text-sm text-muted-foreground">
            <p>
              © {currentYear} Ankita Kaushik. All rights reserved. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;