"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const inquiryTypes = [
    "General Information",
    "Course Enrollment",
    "Private Coaching",
    "Tournament Registration",
    "Workshop Booking",
    "Partnership Inquiry",
    "Media & Press",
    "Other",
  ];

  const faqs = [
    { question: "What age groups do you accept?", answer: "We welcome all ages from 4 and up." },
    { question: "Do you offer trial classes?", answer: "Yes, free trial classes available." },
    { question: "What are your class timings?", answer: "Classes scheduled morning, afternoon, evening daily." },
    { question: "Do you provide online coaching?", answer: "Yes, with interactive tools and personalized sessions." },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // FIXED CREDENTIALS
    const SERVICE_ID = "service_277ip99"; 
    const TEMPLATE_ID = "template_s9g6lti";
    const PUBLIC_KEY = "TSfE8gYMWCMjb7G4h";

    // PROTECTING THE FIXED STRUCTURE: 
    // We append the site identity to the message so we don't need extra fields in EmailJS
    const customizedMessage = `${formData.message}\n\n--------------------------\nSource: Bharat Chess Academy\nInquiry: ${formData.inquiryType}`;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      inquiry_type: formData.inquiryType,
      message: customizedMessage, // Site name is safe inside the message body
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", inquiryType: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Error sending message. Please check your internet or try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDF2F7] to-[#E9D8FD]">
      <section className="pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] text-white px-4 py-2 text-sm">
            Get In Touch
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ready to start your chess journey? We're here to help every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="shadow-2xl rounded-3xl overflow-hidden border-0">
            <CardContent className="p-6 sm:p-12 bg-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                  <CheckCircle className="mx-auto w-20 h-20 mb-4 text-green-500" />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-green-600">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={e => handleInputChange("name", e.target.value)}
                        disabled={isSending}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-semibold">Email *</Label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={e => handleInputChange("email", e.target.value)}
                        disabled={isSending}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={e => handleInputChange("phone", e.target.value)}
                        disabled={isSending}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-semibold">Inquiry Type *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={value => handleInputChange("inquiryType", value)}
                        disabled={isSending}
                      >
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select Inquiry Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type, i) => (
                            <SelectItem key={i} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700 font-semibold">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={e => handleInputChange("subject", e.target.value)}
                      disabled={isSending}
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={e => handleInputChange("message", e.target.value)}
                      disabled={isSending}
                      rows={5}
                      required
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-6 text-lg bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] hover:opacity-90 text-white rounded-xl shadow-lg"
                  >
                    {isSending ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Send Message</>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reach Us Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#2B6CB0] to-[#9F7AEA] bg-clip-text text-transparent">
            How to Reach Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: MapPin, title: "Visit Us", details: ["11-13-75 Road No 2, Alkapuri, Kothapet, Hyderabad-500035"], color: "from-[#2B6CB0] to-[#9F7AEA]" },
              { icon: Phone, title: "Call Us", details: ["+91-9864646481"], color: "from-[#48BB78] to-[#38A169]" },
              { icon: Mail, title: "Email", details: ["bharatchessacademy@gmail.com"], color: "from-[#9F7AEA] to-[#D53F8C]" },
              { icon: Clock, title: "Hours", details: ["Mon-Sun: 10 AM to 8 PM"], color: "from-[#ED8936] to-[#DD6B20]" },
            ].map(({ icon: Icon, title, details, color }, idx) => (
              <Card key={idx} className="shadow-lg border-0">
                <div className={`h-1.5 bg-gradient-to-r ${color}`}></div>
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${color}`}>
                    <Icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  {details.map((d, i) => <p key={i} className="text-gray-600 text-sm">{d}</p>)}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8902674607427!2d78.50310917499912!3d17.322055904365462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9992786f1711%3A0xc2a03126f2eff5c4!2s11-13-75%20Road%20No%202%2C%20Alkapuri%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1694871600000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <CardContent className="p-6 bg-white rounded-2xl">
                  <h3 className="font-bold text-blue-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
