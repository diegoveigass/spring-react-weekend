import { Header } from './components/Header'
import { SalesCard } from './components/SalesCard'

export function App() {
  return (
    <div>
      <Header />
      <section className="section-container">
        <div className="sales">
          <SalesCard />
        </div>
      </section>
    </div>
  )
}
