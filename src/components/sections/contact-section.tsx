"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

interface SectionProps {
  id: string;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactSection({ id }: SectionProps) {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // TODO: Implement actual form submission logic (e.g., send to API endpoint)
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Simulate API call
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    })
    form.reset() // Reset form after successful submission
  }

  return (
    <section id={id} className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out via phone, email, or the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <Card className="shadow-lg border-0">
             <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
             </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">123 Tech Avenue, Suite 400<br />Innovation City, TX 75001</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">(555) 123-4567</a>
                  <p className="text-sm text-muted-foreground/80">Mon-Fri 9am - 5pm CST</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                 <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@optitech.com" className="text-muted-foreground hover:text-primary transition-colors">info@optitech.com</a>
                   <p className="text-sm text-muted-foreground/80">We typically respond within 24 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
           <Card className="shadow-lg border-0">
             <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
             </CardHeader>
            <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Regarding..." {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message here..." {...field} rows={5} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity">Send Message</Button>
                  </form>
                </Form>
            </CardContent>
           </Card>
        </div>
      </div>
    </section>
  );
}
