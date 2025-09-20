import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Frontdesk',
    position: 'Full-stack AI Engineer',
    location: 'New York, USA (Remote)',
    period: 'Mar 2025 – Jun 2025',
    type: 'Contract',
    achievements: [
      'Developed AI-powered agentic receptionist system using LiveKit Agents framework for agentic workflows and scenario-based GPT prompts',
      'Built AWS infrastructure utilizing DynamoDB, S3, and API Gateway for scalable, low-latency AI system management',
      'Integrated third-party APIs (GoHighLevel, Housecall Pro, Acuity Scheduling, Calcom) with OAuth authentication for seamless scheduling automation',
      'Designed fully responsive React front-end interfaces, ensuring seamless cross-device experiences and optimal user interaction',
      'Worked on Zapier integration and explored OpenAI, ElevenLabs, LiveKit technologies'
    ],
    technologies: ['LiveKit Agents', 'AWS', 'React.js', 'DynamoDB', 'S3', 'API Gateway', 'OAuth', 'OpenAI', 'ElevenLabs'],
    color: 'border-tech-stack/30 bg-tech-stack/5'
  },
  {
    company: 'POS Mate',
    position: 'Full Stack Developer',
    location: 'Auckland, New Zealand',
    period: 'May 2024 – Dec 2024',
    type: 'Contract',
    achievements: [
      'Developed scalable CRM system using Node.js backend with React.js frontend, implementing JWT authentication and role-based access control',
      'Optimized API performance reducing response times by 40% through asynchronous processing and database indexing',
      'Built CI/CD pipelines with GitHub Actions and deployed on Azure cloud infrastructure',
      'Enhanced frontend performance achieving 30% improvement in page load times through code optimization'
    ],
    technologies: ['Node.js', 'React.js', 'JWT', 'Azure', 'GitHub Actions', 'CI/CD', 'Database Optimization'],
    color: 'border-primary/30 bg-primary/5'
  },
  {
    company: 'Moana Digital Solutions',
    position: 'Front-end Developer',
    location: 'Auckland, New Zealand',
    period: 'Jan 2024 – Apr 2024',
    type: 'Remote Contract',
    achievements: [
      'Architected AI-powered SaaS platform using Python Django framework with RAG (Retrieval-Augmented Generation) implementation',
      'Built intelligent chatbot system for legal case retrieval from large vector databases, similar to Perplexity with source citations',
      'Developed RESTful APIs supporting seamless data exchange between AI models and frontend applications',
      'Delivered under tight deadlines while maintaining high code quality and system performance'
    ],
    technologies: ['Python', 'Django', 'RAG', 'Vector Database', 'AI/ML', 'SaaS', 'Frontend Frameworks'],
    color: 'border-accent/30 bg-accent/5'
  },
  {
    company: 'Saeloun',
    position: 'Software Developer',
    location: 'Pune, India',
    period: 'May 2022 – Jun 2023',
    type: 'Full-time',
    achievements: [
      'Built scalable e-commerce applications using React.js frontend and Node.js/MongoDB backend architecture',
      'Implemented Azure cloud services (Functions, Blob Storage) for product inventory management and automated workflows',
      'Improved system efficiency by 25% through workflow optimization and performance tuning',
      'Mentored junior developers on React.js and JavaScript best practices, fostering strong development culture',
      'Participated in Agile development including sprint planning, code reviews, and technical architecture discussions'
    ],
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Azure Functions', 'Blob Storage', 'E-commerce', 'Agile'],
    color: 'border-experience/30 bg-experience/5'
  },
  {
    company: 'Tarento Group',
    position: 'Software Engineer',
    location: 'Bengaluru, India',
    period: 'Jun 2021 – May 2022',
    type: 'Full-time',
    achievements: [
      'Architected e-learning platform serving 1,000+ healthcare professionals with React.js/Node.js full-stack solution',
      'Integrated real-time APIs for seamless data synchronization and live updates',
      'Enhanced UI/UX design using Bootstrap and modern JavaScript practices',
      'Optimized system performance following software engineering best practices and implementing robust error handling'
    ],
    technologies: ['React.js', 'Node.js', 'Bootstrap', 'Real-time APIs', 'Healthcare', 'E-learning'],
    color: 'border-contact/30 bg-contact/5'
  },
  {
    company: 'Techment Technology',
    position: 'Software Developer',
    location: 'Bengaluru, India',
    period: 'Jun 2019 – Apr 2021',
    type: 'Full-time',
    achievements: [
      'Worked on full-stack projects: Developed web pages and made them fully responsive, translating Figma design specifications into production-ready interfaces',
      'Optimized frontend performance, reducing page load time by 45% through efficient rendering',
      'Implemented secure authentication mechanisms (OAuth, JWT) for sensitive data protection',
      'Worked on e-commerce website with React.js implementing cart functionality and product pages'
    ],
    technologies: ['React.js', 'Full-stack', 'Figma', 'OAuth', 'JWT', 'E-commerce', 'Performance Optimization'],
    color: 'border-muted/30 bg-muted/5'
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recent professional journey showcasing AI development, full-stack engineering, and cloud architecture expertise
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={`${experience.company}-${experience.period}`}
              className={`${experience.color} border transition-all duration-500 hover:shadow-glow group animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {experience.position}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                      <Building2 className="w-5 h-5" />
                      {experience.company}
                      <Badge variant="secondary" className="ml-2">
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Key Achievements</h4>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm lg:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs lg:text-sm border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Highlights Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Career Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Project Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-stack mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Users Served</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;