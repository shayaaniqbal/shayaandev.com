import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Linkedin, Github, Youtube, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import NeonText from "./NeonText";
import NeonBorder from "./NeonBorder";
import PixelCorners from "./PixelCorners";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out, I'll get back to you soon.",
        variant: "default"
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/shayaaniqbal", label: "LinkedIn" },
    { icon: <Github size={20} />, url: "https://github.com", label: "GitHub" },
    { icon: <Youtube size={20} />, url: "https://youtube.com", label: "YouTube" },
    { icon: <Mail size={20} />, url: "mailto:shayaan.dev@email.com", label: "Email" }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <NeonText color="blue" tag="h2" className="text-2xl md:text-3xl font-arcade mb-4">
            Contact Me
          </NeonText>
          <p className="text-gray-300 max-w-xl mx-auto">
            Have a project in mind or just want to chat about game development? Drop me a message!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <NeonBorder color="blue" className="h-full">
              <PixelCorners className="bg-card p-6 h-full">
                <NeonText color="blue" tag="h3" className="font-arcade text-md mb-6">
                  Send a Message
                </NeonText>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="bg-background border-primary text-white focus:ring-blue-500" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="bg-background border-primary text-white focus:ring-blue-500" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="bg-background border-primary text-white focus:ring-blue-500 min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full font-arcade bg-background neon-border neon-border-blue hover:neon-text-blue transition-all pixel-corners"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={16} className="ml-2" />
                    </Button>
                  </form>
                </Form>
              </PixelCorners>
            </NeonBorder>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <NeonBorder color="pink" className="h-full">
              <PixelCorners className="bg-card p-6 h-full">
                <NeonText color="pink" tag="h3" className="font-arcade text-md mb-6">
                  Connect With Me
                </NeonText>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-arcade text-sm mb-4">Follow Me</h4>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-background neon-border neon-border-pink hover:neon-text-pink transition-all pixel-corners"
                          aria-label={link.label}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-arcade text-sm mb-4">Download</h4>
                    <a 
                      href="/resume.pdf" 
                      className="inline-block px-6 py-3 font-arcade text-sm bg-background neon-border neon-border-purple text-white hover:neon-text-purple transition-all pixel-corners"
                    >
                      Resume / CV
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-arcade text-sm mb-4">Availability</h4>
                    <p className="text-gray-300 mb-2">
                      I'm currently available for freelance projects and full-time opportunities.
                    </p>
                    <p className="text-gray-300">
                      Get in touch to discuss your project requirements or job opportunities.
                    </p>
                  </div>
                </div>
              </PixelCorners>
            </NeonBorder>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
    </section>
  );
}
