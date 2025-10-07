import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data
      const data = contactFormSchema.parse(req.body);
      
      // In a real app, you might store this data or send an email
      // For this demo, we'll just return success
      
      return res.status(200).json({
        success: true,
        message: 'Your message has been received successfully!'
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Invalid form data',
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request.'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
