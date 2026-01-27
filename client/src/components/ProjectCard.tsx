import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="h-full">
      <Card className="project-card group h-full flex flex-col bg-card/30 backdrop-blur-sm border-white/5 rounded-xl overflow-hidden">
        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <FolderGit2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
                  aria-label="View on GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
                  aria-label="View live project"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-grow pb-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="pt-0 border-t border-white/5">
          <div className="flex flex-wrap gap-2 pt-4">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-background/50 text-muted-foreground border border-white/5 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
