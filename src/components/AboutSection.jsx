import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                         <h3 className="text-2xl font-semibold" >
                            Passionte Web Developer & Tech Creator</h3>
                         <p className="text-muted-foreground">
                             I am a passionate web developer and tech creator with a knack for building dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions. My journey in the tech world has been fueled by a relentless curiosity and a commitment to continuous learning. Whether it's crafting seamless user experiences or optimizing server-side performance, I am dedicated to delivering high-quality results that exceed expectations.
                        </p> 
                        <p className="text-muted-foreground">
                           I'm always eager to collaborate on innovative projects and contribute to the ever-evolving landscape of web development. Let's connect and create something amazing together! 
                        </p>
                        <div className="flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {""}
                                Get In Touch
                            </a>
                            <a
                                href="/vithu (1).pdf"
                                download
                                className="px-6 py-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download Resume
                            </a>
                               </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10">
                                   <Code className="w-6 h-6 text-primary"/>  
                                </div> 
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">A PHP-based web application featuring user authentication and a dashboard interface.</p>
                                    </div>                           
                            </div>
                        </div>

                    
                         <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10">
                                   <User className="w-6 h-6 text-primary"/>  
                                </div> 
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Desiging intuitive uesr interfacea and seamless user experiences.</p>
                                    </div>                            
                            </div>
                        </div>
                        
                     
                       <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4 ">
                                <div className="p-3 rounded-full bg-primary/10">
                                   <Briefcase className="w-6 h-6 text-primary"/>  
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project </h4>
                                    <p className="text-muted-foreground">A developer actively engaged in building and managing multiple web projects simultaneously.</p>
                                    </div>                             
                            </div>
                        </div>
                        
                     
                  </div>
                </div>
            </div>
        </section>
    );
}