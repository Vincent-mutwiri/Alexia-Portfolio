import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import experienceData from "@/data/experience.json"

interface Experience {
  id: number
  role: string
  company: string
  period: string
  duties: string[]
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over six years of experience in EdTech and business development across East Africa
            </p>
          </div>

          <div className="space-y-8">
            {(experienceData as Experience[]).map((experience) => (
              <Card key={experience.id} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl text-foreground">
                      {experience.role}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {experience.period}
                    </Badge>
                  </div>
                  <p className="text-lg font-semibold text-primary">
                    {experience.company}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {experience.duties.map((duty, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1.5">•</span>
                        <span className="text-muted-foreground">{duty}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

