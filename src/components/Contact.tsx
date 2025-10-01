import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your preferred email service)
    const mailtoLink = `mailto:satyabanni11851@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "satyabanni11851@gmail.com",
      href: "mailto:satyabanni11851@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Satyanarayana-vasamsetti",
      href: "https://github.com/Satyanarayana-vasamsetti"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/satyanarayana",
      href: "www.linkedin.com/in/satya-narayana-vasamsetti-0b161b2a0"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary-glow mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-8 text-gradient">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking for a dedicated team member, need help with a specific project, 
              or want to discuss potential collaboration opportunities, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-accent-muted rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.label}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 card-gradient">
              <h4 className="font-semibold mb-2">Available for:</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  Full-time opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  Freelance projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  Technical consultations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  Remote collaborations
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="card-elevated">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-hero flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;