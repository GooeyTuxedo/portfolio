"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Portfolio = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering theme toggle after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Theme Toggle */}
      {mounted && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="backdrop-blur-sm"
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      )}

      {/* Header/Hero Section */}
      <motion.header 
        className="container mx-auto px-4 py-16 md:py-24"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold"
            variants={fadeInUp}
          >
            David Keathley
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground"
            variants={fadeInUp}
          >
            Full Stack Engineer
          </motion.p>
          <motion.div 
            className="flex gap-4 pt-4"
            variants={fadeInUp}
          >
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <a href="https://github.com/GooeyTuxedo" className="p-1">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <a href="https://linkedin.com/in/thedavidkeathley" className="p-1">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <a href="mailto:dev@based.consulting" className="p-1">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>
              Passionate and self-taught full stack engineer with a diverse background
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg">
            <p className="text-lg text-muted-foreground">
              A lifelong learner with a strong ability to tackle complex challenges and deliver effective, 
              scalable solutions. I specialize in modern web development and DevOps practices, 
              bringing together development and operations to create efficient, reliable systems.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
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
        className="container mx-auto px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8"
          variants={fadeInUp}
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-6">
          <ExperienceCard 
            title="DevOps Engineer"
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

      {/* Contact Section */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              I'm currently open to new opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              Feel free to reach out via email at{' '}
              <a href="mailto:dev@based.consulting" className="text-primary hover:underline">
                dev@based.consulting
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

const SkillCard = ({ title, skills }: { title: string, skills: string[]}) => (
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

const ExperienceCard = ({ title, company, period, description }: { title: string, company: string, period: string, description: string }) => (
  <motion.div variants={fadeInUp}>
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{company} | {period}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default Portfolio;