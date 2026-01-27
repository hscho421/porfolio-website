import { Building2, MapPin, Calendar } from "lucide-react";

interface ExperienceProps {
  company: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  technologies?: string[] | null;
  location?: string | null;
  index: number;
}

export function ExperienceItem({ company, role, startDate, endDate, description, technologies, location, index }: ExperienceProps) {
  return (
    <div className="relative pl-8 md:pl-0 mb-8">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2" />

      <div className={`md:flex items-start justify-between gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        {/* Timeline Dot */}
        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 mt-3">
          <div className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10" />
        </div>

        {/* Date (Desktop) */}
        <div className={`hidden md:flex w-[45%] items-center gap-2 pt-2 font-mono text-sm text-muted-foreground ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
          <Calendar className="w-4 h-4 text-primary/60" />
          <span>{startDate} — {endDate || "Present"}</span>
        </div>

        {/* Content */}
        <div className="w-full md:w-[45%]">
          <div className="p-6 rounded-xl bg-card/30 border border-white/5 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm hover:bg-card/50 hover:shadow-lg hover:shadow-primary/5">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold font-display text-foreground mb-2">{role}</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-primary font-medium">
                  <Building2 className="w-4 h-4" />
                  <span>{company}</span>
                </div>
                {location && (
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                  </div>
                )}
              </div>
              {/* Mobile date */}
              <div className="md:hidden flex items-center gap-1.5 font-mono text-xs text-muted-foreground mt-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>{startDate} — {endDate || "Present"}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary/80 border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
