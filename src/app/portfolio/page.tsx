'use client';

import React from 'react';
import { useTheme } from "next-themes";
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ProjectCard = ({ title, description, tags, status, screenshot, liveUrl }: { title: string, description: string, tags: string[], status: string, screenshot?: string, liveUrl?: string }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <motion.div variants={fadeInUp}>
        <Card 
          className="h-full hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>{title}</CardTitle>
              <span className="text-sm px-2 py-1 rounded-full bg-primary/10 text-primary">
                {status}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {status}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              {screenshot && (
                <img
                  src={screenshot}
                  alt={`Screenshot of ${title}`}
                  className="w-full h-auto max-h-[50vh] object-contain"
                />
              )}
            </div>
            <p className="text-muted-foreground">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            {liveUrl && (
              <div className="flex justify-end">
                <Button asChild>
                  <a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Live App
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};


const ExperienceCard = ({ title, company, period, description }: { title: string, company:string, period: string, description: string }) => (
  <motion.div variants={fadeInUp}>
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{company} | {period}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const SkillCard = ({ title, skills }: { title: string, skills: string[] }) => (
  <motion.div variants={fadeInUp}>
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-none space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-muted-foreground">{skill}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);

const Portfolio = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Initial render with no theme-dependent elements
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">David Keathley</h1>
          <p className="text-xl">Full Stack Engineer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold"
          variants={fadeInUp}
        >
          David Keathley
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mt-4"
          variants={fadeInUp}
        >
          Full Stack Engineer
        </motion.p>
        <motion.p 
          className="mt-8 text-lg text-muted-foreground"
          variants={fadeInUp}
        >
          A lifelong learner with a strong ability to tackle complex challenges and deliver effective, 
          scalable solutions. I specialize in modern web development and DevOps practices.
        </motion.p>

        <motion.div 
          className="flex gap-4 mt-8"
          variants={fadeInUp}
        >
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
            <a href="https://github.com/GooeyTuxedo" className="p-1" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub Profile</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
            <a href="https://linkedin.com/in/thedavidkeathley" className="p-1" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn Profile</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
            <a href="mailto:dev@based.consulting" className="p-1">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email Contact</span>
            </a>
          </Button>
        </motion.div>

        {/* Skills Section */}
        <motion.section 
          className="mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8"
            variants={fadeInUp}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              title="Development"
              skills={["JavaScript", "TypeScript", "React", "Node.js", "Ruby"]}
            />
            <SkillCard 
              title="DevOps & Infrastructure"
              skills={["Docker", "Kubernetes", "Terraform", "ArgoCD", "Talos Linux"]}
            />
            <SkillCard 
              title="Tools & Practices"
              skills={["Git", "CI/CD", "Test-Driven Development", "Agile", "Functional Programming"]}
            />
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8"
            variants={fadeInUp}
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-6">
            <ExperienceCard 
              title="DevOps Consultant"
              company="Omakasea (501(c)(3) Nonprofit)"
              period="July 2023 - January 2024"
              description="Led infrastructure modernization efforts, implementing container orchestration and automated deployments while achieving significant cost savings."
            />
            <ExperienceCard 
              title="Software Developer"
              company="Frontside Software Inc."
              period="February 2018 - February 2019"
              description="Delivered feature enhancements and bug fixes for Ruby and React-based applications while championing test-driven development and collaboration practices."
            />
            <ExperienceCard 
              title="Front End Developer"
              company="Q2 Software Inc."
              period="October 2016 - February 2018"
              description="Built and maintained large-scale enterprise applications while ensuring code quality through automated testing and peer review practices."
            />
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Weather App"
              description="A dynamic weather forecast app using a third party API to fetch real-time data."
              tags={["TypeScript", "Next.js", "TailwindCSS", "Serverless Functions"]}
              status="Feature Complete"
              screenshot="/weather_proj.png"
              liveUrl="https://weather.based.consulting"
            />
            <ProjectCard 
              title="AI Tweet Generator"
              description="A web application that leverages AI to generate engaging Twitter posts."
              tags={["TypeScript", "LLM Integration", "Next.js", "TailwindCSS"]}
              status="In Development"
              screenshot="/tweet_proj.png"
              liveUrl="https://tweetgen.based.consulting"
            />
            <ProjectCard 
              title="Cloud Infrastructure Dashboard"
              description="A real-time monitoring dashboard for Kubernetes clusters. Built with React, TypeScript, and WebSocket integration for live updates. Features cost optimization insights and deployment tracking."
              tags={["TypeScript", "Next.js", "Redux",  "Kubernetes", "WebSocket"]}
              status="In Development"
              screenshot='/k8s_dashboard_proj.png'
            />
            <ProjectCard 
              title="Space Exploration Tracker"
              description="Track space missions, celestial events, and explore stunning images from space. All data sourced from the public NASA API."
              tags={["TypeScript", "Next.js", "REST API", "TailwindCSS"]}
              status="In Development"
              screenshot="/space_proj.png"
              liveUrl="https://space.based.consulting"
            />
            <ProjectCard 
              title="AI Chatbot for WhatsApp"
              description="An AI-powered bot for WhatsApp that leverages the OpenAI API. It enables users to interact with advanced bots in a natural and efficient manner."
              tags={["TypeScript", "LLM Integration", "Node.js"]}
              status="Planning"
            />
            <ProjectCard 
              title="DevOps Automation Suite"
              description="A collection of infrastructure-as-code templates and CI/CD pipelines. Includes Terraform modules for AWS infrastructure and ArgoCD configurations for Kubernetes deployments."
              tags={["Terraform", "ArgoCD", "AWS", "GitOps"]}
              status="Concept"
            />
          </div>
        </motion.section>


        {/* Contact Section */}
        <motion.section 
          className="mt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <p className="text-muted-foreground">
                I&apos;m currently open to new opportunities
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">

              <p className="text-lg text-muted-foreground">
                Feel free to reach out via email at{' '}
                <a 
                  href="mailto:dev@based.consulting" 
                  className="text-primary hover:underline"
                  >
                  dev@based.consulting
                </a>
              </p>
              <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                    <a href="https://github.com/GooeyTuxedo" className="p-1" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub Profile</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                    <a href="https://linkedin.com/in/thedavidkeathley" className="p-1" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Portfolio;
