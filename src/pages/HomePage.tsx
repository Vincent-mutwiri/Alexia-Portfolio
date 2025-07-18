import { Hero } from "@/components/Hero"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { PresentationsSection } from "@/components/PresentationsSection"
import { ContactSection } from "@/components/ContactSection"

export function HomePage() {
  return (
    <main>
      <Hero />
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              About Me
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                Alexia Sahara is an education-technology and business-development professional with more than six years' 
                experience delivering digital learning solutions across East Africa. She has successfully led content 
                digitalization roll-outs, managed government partnerships, and grown revenue significantly across multiple 
                EdTech organizations.
              </p>
              <p>
                Her expertise spans project management, stakeholder engagement, and strategic business development in the 
                education sector. Alexia has a proven track record of building partnerships with NGOs, corporates, and 
                government entities to implement large-scale digital learning initiatives that impact hundreds of thousands 
                of learners.
              </p>
              <p>
                Throughout her career, she has demonstrated exceptional ability to drive growth, having doubled web users 
                to 500k+, tripled app downloads, and grown regional revenue past KES 14 million. Her work has directly 
                contributed to improving educational outcomes across Kenya, Tanzania, Rwanda, and Burundi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <ProjectsSection />
      <PresentationsSection />
      <ContactSection />
    </main>
  )
}

