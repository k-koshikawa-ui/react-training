import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Status from './Status'
import Info from './Info.jsx'
import Function from './Function.jsx'
import Feature from './Feature.jsx'
import CustomerVoice from './CustomerVoice'
import UsefulInfo from './UsefulInfo.jsx'
import NewInfo from './NewInfo.jsx'
import FooterCta from './FooterCta.jsx'
import FooterSitemap from './FooterSitemap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Status />
    <Info />
    <Function />
    <Feature />
    <CustomerVoice />
    <UsefulInfo />
    <NewInfo />
    <FooterCta />
    <FooterSitemap />    
  </StrictMode>,
)
