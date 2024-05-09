import { CustomerSection } from '../CustomerSection'
import { ProductGrid } from '../ProductGrid'
import { RecoreInteractive } from '../RecoreInteractive'
import { TemplateWall } from '../TemplateWall'

export default function MainContent () {

  return (
    <section className='main-content'>
        <ProductGrid />
        <RecoreInteractive />
        <TemplateWall />
        <CustomerSection />
      </section>
  )
}