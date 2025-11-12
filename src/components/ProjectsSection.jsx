import { ArrowBigRight, ExternalLink, Github } from "lucide-react";

const project = [
  {
    id: 1,
    title: "Face-Emotion-Recognition",
    description:
      "A system that automatically detects and classifies human emotions from facial expressions using deep learning techniques.",
    image: "/project/ptojec1.jpg",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "The Plantscape Android Application",
    description:
      "An Android Studio project showcasing a plant care and management app named Plantscape.",
    image: "/project/ptojec2.webp",
    tags: ["Java", "XML", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Interactive Web Dashboard Application",
    description:
      "A web application with user authentication and dashboard management, built using PHP, Hack, CSS, and JavaScript",
    image: "/project/ptojec3.png",
    tags: ["PHP", "Hack", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent works. Each project is briefly described
          with links to code repositories and live demos in it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foregroun">                    
                    {tag}
                    </span>))}
                </div>
            </div>
            <h3 className="text-xt font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foregrond text-sm mb-4">
            {project.description}
            </p>
            <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                    <a href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transione-colors duration-300">        
                        <ExternalLink  size={20} />
                    </a>
                     <a href={project.githubUrl}
                       target="_blank"
                     className="text-foreground/80 hover:text-primary transione-colors duration-300">
                        <Github size={20} />
                    </a>
                    </div>
                </div>
            </div>
          ))}
        </div>
        <div className="tex-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="blank"
            href="https://github.com/arunvithushan">
                Check My Github <ArrowBigRight size={16} />
            </a>

        </div>
      </div>
    </section>
  );
};
