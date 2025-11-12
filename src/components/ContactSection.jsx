import { Mail } from "lucide-react";

export const ContactSection = () => {
    return (<section
    id="contact" className="py-24 px-4 relative bg-secondary/30"> 
    <div className="container mx-auto max-w-5xl"> 
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
     Contact Me <span className="text-primary">Touch</span></h2>

   <p className="text-center text-muted-foreground md-12 max-w-2xl mx-auto">
      Have a project in mind or collaborate? Feel free to reach out! I'm always open to discussing new ideas, projects, or opportunities to work together.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gep-12">
    <div className="space-y-8">
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                 <Mail className="h-6 w-6 text-primary" /> 
                </div>
                <div>
                    <h4>Email</h4>
                    <a href="arunvithushan.mj@gmail.com" className="text -muted-foregronund hover:text-primary transition-colos">
                        arunvithushan.mj@gmail.com
                    </a>
                </div>


            </div>
        </div>
    </div>
</div>
</div> 
 </section>

);
};