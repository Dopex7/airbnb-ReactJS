import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './index.css'
import Card from './components/Card'
import data from './components/data'

const cardList = data.map(item =>{
  return (
    <Card 
    key={item.id}
    {...item}
    />
  )

  
})

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App />
    <Navbar />
    <Hero />
    <section className="cards-list">
    {cardList}
    </section>
    
  </StrictMode>,
  
)
