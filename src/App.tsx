import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { HomePage } from "@/pages/HomePage"
import { Seo } from "@/components/Seo"
import './App.css'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="alexia-portfolio-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Seo />
        <Header />
        <HomePage />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

