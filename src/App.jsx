import Header from './Header/Header.jsx'
import Nav from './Nav/Nav.jsx'
import About from './About/About.jsx'
import Skills from './Skills/Skills.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
import Stats from './Stats/Stats.jsx'
import Experience from './Experience/Experience.jsx'
import Contact from './Contact/Contact.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Nav />
        <main className="main page__main">
          <About />
          <Skills />
          <Portfolio />
          <Stats />
          <Experience />
          <Contact />
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
