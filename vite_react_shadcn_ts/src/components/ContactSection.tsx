import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ankita.kaushik012@gmail.com',
      href: 'mailto:ankita.kaushik012@gmail.com',
      color: 'text-destructive'
    },
     {
      icon: Linkedin,
      label: 'Linkedin',
      value: 'ankitakaushik',
      href: 'https://www.linkedin.com/in/ankitakaushik/',
      color: 'text-primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Ankita012',
      href: 'https://github.com/Ankita012',
      color: 'text-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Ready to discuss opportunities, collaborate on projects, or just have a chat about AI and technology?
            I'd love to hear from you!
          </p>
        </div>

        <Card className="bg-gradient-card border-border/50 pt-6">
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col lg:flex-row lg:justify-center gap-8">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4 group">
                      <div className={`p-3 rounded-lg bg-background/50 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <a
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Status */}
              <div className="text-center space-y-4">
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                  Available for Freelancing
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Available for freelancing projects and consulting opportunities in AI/ML and full-stack development
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;