import { 
  Coffee, // Java
  Layers, // Spring Boot
  Shield, // Spring Security
  Database, // MySQL
  Globe, // React
  Server, // Microservices
  Cloud, // Docker/Cloud
  GitBranch, // Git
  Lock, // JWT
  Settings // REST API
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: [
        { name: "Java", icon: Coffee, level: 95, color: "text-orange-500" },
        { name: "Spring Boot", icon: Layers, level: 90, color: "text-green-500" },
        { name: "Spring Security", icon: Shield, level: 85, color: "text-green-600" },
        { name: "Spring MVC", icon: Settings, level: 88, color: "text-green-400" },
        { name: "Hibernate/JPA", icon: Database, level: 82, color: "text-blue-500" },
        { name: "REST API", icon: Globe, level: 92, color: "text-purple-500" },
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", icon: Globe, level: 88, color: "text-blue-400" },
        { name: "JavaScript", icon: Coffee, level: 85, color: "text-yellow-500" },
        { name: "HTML/CSS", icon: Globe, level: 90, color: "text-orange-400" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", icon: Database, level: 87, color: "text-blue-600" },
        { name: "Docker", icon: Cloud, level: 80, color: "text-blue-500" },
        { name: "Git", icon: GitBranch, level: 85, color: "text-orange-600" },
      ]
    },
    {
      title: "Security & Authentication",
      skills: [
        { name: "JWT", icon: Lock, level: 85, color: "text-red-500" },
        { name: "Google Auth", icon: Shield, level: 80, color: "text-green-500" },
        { name: "Cloud Deployment", icon: Cloud, level: 78, color: "text-cyan-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary-glow mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise across the full technology stack, with a focus on modern Java development and web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="card-elevated animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group"
                    style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-primary-glow rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1 + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-gradient">
            Learning Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-accent to-primary-glow"></div>
              
              <div className="space-y-12">
                {[
                  {
                    year: "2025",
                    title: "Advanced Full Stack Development",
                    description: "Mastered microservices architecture, Docker containerization, and cloud deployment strategies."
                  },
                  {
                    year: "2024",
                    title: "Spring Boot & React Specialization",
                    description: "Deep dive into Spring Boot ecosystem, REST API development, and modern React patterns."
                  },
                  {
                    year: "2023",
                    title: "Java Foundation & Web Development",
                    description: "Built strong foundation in Java programming, OOP concepts, and database management."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="card-glow inline-block">
                        <div className="text-sm text-accent font-semibold mb-1">{item.year}</div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;