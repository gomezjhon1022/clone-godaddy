import { CustomerSection } from '../CustomerSection'
import { ProductGrid } from '../ProductGrid'
import { RecoreInteractive } from '../RecoreInteractive'
import { TemplateWall } from '../TemplateWall'
import { Comments } from '../Comments'
import { Search } from '../Search'
import { Guide } from '../Guide'



export default function MainContent () {

  return (
    <section className='main-content'>
        <ProductGrid />
        <RecoreInteractive />
        <TemplateWall />
        <CustomerSection />
        <Comments />
        <Search />
        <Guide />

      </section>
  )
}