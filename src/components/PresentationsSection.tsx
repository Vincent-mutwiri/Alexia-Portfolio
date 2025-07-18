import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import presentationsData from "@/data/presentations.json"

interface Presentation {
  id: number
  title: string
  type: string
  venue: string
  year: string | number
  notes: string
}

export function PresentationsSection() {
  return (
    <section id="presentations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Speaking & Training
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading workshops, presentations, and training initiatives across the region
            </p>
          </div>

          <div className="space-y-6">
            {(presentationsData as Presentation[]).map((presentation) => (
              <Card key={presentation.id} className="border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">
                        {presentation.title}
                      </CardTitle>
                      <Badge variant="outline" className="mb-2">
                        {presentation.type}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {presentation.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {presentation.venue}
                    </div>
                    <div className="flex items-start">
                      <Users className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                      <p className="text-muted-foreground">{presentation.notes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

