import { ExternalLink, Github, Cpu, Shield, MapPin, Calendar, LeafyGreen, StretchVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "CRM – Lead Management System",
      description: "A comprehensive Customer Relationship Management system focused on efficient lead management, enabling businesses to track leads, manage interactions, and streamline the sales pipeline with a secure and user-friendly interface.",
      techStack: ["Java", "Spring Boot", "React", "REST API", "MySQL", "JWT"],
      features: [
        "Lead tracking and management throughout the sales cycle",
        "Real-time analytics dashboard with interactive charts",
        "Automated follow-up reminders for consistent engagement",
        "Advanced search and filtering capabilities",
        "Role-based access control and security"
      ],
      github: "https://github.com/Satyanarayana-vasamsetti/AdvanceJava-Project",
      demo: "https://advance-java-project.vercel.app/dashboard",
      icon: Cpu,
      status: "Production"
    },
    {
      title: "TB Detection System",
      description: "A Streamlit-based web application for Tuberculosis detection, utilizing deep learning models to analyze chest X-ray images and provide fast, accurate diagnostic support.",
      techStack: ["Python", "Streamlit", "TensorFlow/Keras", "Scikit-learn", "OpenCV"],
      features: [
        "User-friendly Streamlit web interface for easy access",
        "Deep learning-powered TB detection from chest X-ray images",
        "Real-time image upload and instant diagnostic results",
        "Explainable AI features for model transparency",
        "Lightweight and deployable solution for healthcare use"
      ],
      github: "https://github.com/Satyanarayana-vasamsetti/TBDetector",
      demo: "https://tb-detector.streamlit.app/",
      icon: Calendar,
      status: "Completed"
    },
    {
      title: "Weed Detection System",
      description: "A computer vision-based system that detects and classifies weeds in crop fields, helping farmers optimize herbicide usage and improve crop yield.",
      techStack: ["Python", "TensorFlow/Keras", "OpenCV", "Streamlit", "Scikit-learn"],
      features: [
        "Streamlit web interface for uploading crop field images",
        "Deep learning models for accurate weed detection and classification",
        "Real-time prediction and visualization of detected weeds",
        "Support for multiple crop types and weed categories",
        "Scalable solution deployable for precision agriculture"
      ]
      ,
      github: "https://github.com/Satyanarayana-vasamsetti/Weed_Detection",
      icon: LeafyGreen,
      status: "Completed"
    },
    {
      title: "SoulStretch – Online Yoga Platform",
      description: "An online yoga platform designed for all age groups, offering expert-led yoga courses that promote physical, mental, and spiritual well-being.",
      techStack: ["HTML", "CSS", "Angular", "Spring", "REST API", "MySQL"],
      features: [
        "Structured yoga programs guided by certified professionals",
        "User-friendly web interface for easy access to courses",
        "Progress tracking and personalized recommendations",
        "Accessible wellness resources for all age groups",
        "Scalable and responsive design for web deployment"
      ],
      github: "https://github.com/satyanarayana/event-management",
      demo: null,
      icon: StretchVertical,
      status: "Legacy"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-success text-success-foreground';
      case 'Completed': return 'bg-accent text-accent-foreground';
      case 'Legacy': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary-glow mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-elevated group hover:card-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <project.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3 text-sm">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent-muted text-accent text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="btn-outline flex-1"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    asChild
                    size="sm"
                    className="btn-hero flex-1"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="btn-outline"
          >
            <a
              href="https://github.com/Satyanarayana-vasamsetti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;