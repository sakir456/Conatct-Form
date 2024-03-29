
import './App.css'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm'

function App() {
 

  return (
    <div>
      <Header />
      <main className='main_container'>
      <Contact />
      <ContactForm />
      </main>

    </div>
      
       
   
  )
}

export default App
