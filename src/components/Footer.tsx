import { Mail, Phone, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Alexia Sahara
              </h3>
              <p className="text-muted-foreground">
                EdTech Specialist & Business Development Leader
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                <button 
                  onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </button>
                <button 
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect
              </h4>
              <div className="space-y-3">
                <a 
                  href="mailto:alexiasahara@gmail.com"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  alexiasahara@gmail.com
                </a>
                <a 
                  href="tel:+254727888918"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +254 727 888 918
                </a>
                <a 
                  href="https://linkedin.com/in/alexia-sahara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Alexia Sahara. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

