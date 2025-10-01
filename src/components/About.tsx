import { Code, Lightbulb, Rocket, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions for complex technical challenges."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building high-performance applications optimized for speed and efficiency."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail and commitment to delivering pixel-perfect solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary-glow mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">
              Passionate Full Stack Developer
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a dedicated Java Full Stack Developer with a passion for creating robust, 
              scalable web applications. My expertise spans across the entire development stack, 
              from crafting intuitive user interfaces with React to building powerful backend 
              systems with Spring Boot.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With hands-on experience in microservices architecture, REST API development, 
              and modern DevOps practices, I focus on delivering high-quality solutions that 
              meet both user needs and business objectives. I believe in continuous learning 
              and staying updated with the latest technologies and industry best practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source 
              projects, and sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="card-elevated group hover:card-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;