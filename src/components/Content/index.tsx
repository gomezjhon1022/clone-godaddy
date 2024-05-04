
import './Content.sass'
import { Marquee } from './Marquee'
import MainContent from './MainContent'

export function Content () {
  
  return (
    <main className="main">
      <Marquee />
      <MainContent />
    </main>
  )
}