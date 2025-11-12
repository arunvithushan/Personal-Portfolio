import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center p-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-[hsl(var(--text))]">
            <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Arun </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Vidushan</span>
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a motivated and detail-oriented IT undergraduate passionate about
             software development, machine learning, and data analysis. 
             I have a strong foundation in C, Python, Java, and JavaScript, 
             and I enjoy building modern apps with React Native.I love solving problems, 
             designing efficient solutions, and turning ideas into real projects. 
             I’m fluent in English, Tamil, and Sinhala, 
             and I’m always eager to learn, collaborate, and contribute to innovative IT solutions.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a
              href="#projects"className="cosmic-button">
            
              View My Projects
            </a>
          </div>
        </div>
      </div>
     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
       <span>Scroll</span>
       <ArrowDown className="h-5 w-5 text-primary" />
</div>

    </section>
  );
};
 