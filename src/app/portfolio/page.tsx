import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">David Keathley</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Full Stack Engineer</p>
          <div className="flex gap-4 pt-4">
            <Button variant="outline" size="icon">
              <a href="https://github.com/GooeyTuxedo" className="p-1">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="https://linkedin.com/in/thedavidkeathley" className="p-1">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="mailto:dev@based.consulting" className="p-1">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
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
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
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
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
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
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
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
      </section>
    </div>
  );
};

const SkillCard = ({ title, skills }: {title: string, skills: string[]}) => (
  <Card>
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
);

const ExperienceCard = ({ title, company, period, description }: {title: string, company: string, period: string, description: string}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{company} | {period}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default Portfolio;