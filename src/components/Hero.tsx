import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/alexia_sahara_cv.pdf"
    link.download = "Alexia_Sahara_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/src/assets/alexia-headshot.jpg"
              alt="Alexia Sahara"
              className="w-96 h-96 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = "none"
              }}
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Alexia Sahara
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              EdTech Specialist · Business Development Leader
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experienced education-technology and business-development professional with more than six years' 
              experience delivering digital learning solutions across East Africa. Proven track record in 
              growing revenue, building strategic partnerships, and implementing large-scale EdTech initiatives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={downloadCV} size="lg" className="text-lg px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="text-lg px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Connect With Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

