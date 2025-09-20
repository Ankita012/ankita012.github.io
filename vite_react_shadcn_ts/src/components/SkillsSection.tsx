import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, Code, Database, Cloud, GitBranch, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'AI/ML & Frameworks',
    icon: Brain,
    color: 'text-tech-stack',
    skills: [
      { name: 'LiveKit Agents', level: 95 },
      { name: 'LangChain', level: 90 },
      { name: 'OpenAI GPT', level: 92 },
      { name: 'RAG Systems', level: 88 },
      { name: 'Vector Databases', level: 85 },
    ]
  },
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'text-primary',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'JavaScript (ES6+)', level: 94 },
    ]
  },
  {
    title: 'Backend & Database',
    icon: Database,
    color: 'text-accent',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python (FastAPI)', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'SQL', level: 87 },
      { name: 'RESTful APIs', level: 93 },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-experience',
    skills: [
      { name: 'AWS (DynamoDB, S3)', level: 85 },
      { name: 'Azure', level: 82 },
      { name: 'CI/CD (GitHub Actions)', level: 88 },
      { name: 'Docker', level: 80 },
    ]
  },
  {
    title: 'Version Control & Tools',
    icon: GitBranch,
    color: 'text-contact',
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'JIRA', level: 90 },
      { name: 'Postman', level: 92 },
      { name: 'Jenkins', level: 85 },
    ]
  },
  {
    title: 'AI Development Tools',
    icon: Wrench,
    color: 'text-primary-glow',
    skills: [
      { name: 'Claude AI', level: 90 },
      { name: 'Cursor', level: 95 },
      { name: 'Copilot', level: 88 },
      { name: 'Lovable AI', level: 92 },
    ]
  },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and modern cloud technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
              style={{ 
                animationDelay: `${categoryIndex * 200}ms`,
                animation: isVisible ? 'fade-in-up 0.6s ease-out forwards' : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <category.icon className={`w-6 h-6 ${category.color} group-hover:animate-bounce`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={isVisible ? skill.level : 0}
                        className="h-2 bg-muted/30"
                        style={{
                          '--progress-width': `${skill.level}%`,
                          animation: isVisible ? `progress 2s ease-out ${(categoryIndex * 200 + skillIndex * 100)}ms forwards` : 'none'
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Design',
              'API Integration', 
              'Cross-browser Compatibility',
              'Workflow Automation',
              'CRM Systems',
              'Agile/Scrum',
              'System Architecture',
              'Performance Optimization'
            ].map((competency, index) => (
              <Badge 
                key={competency}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fade-in-up 0.4s ease-out forwards' : 'none',
                  opacity: isVisible ? 1 : 0
                }}
              >
                {competency}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;