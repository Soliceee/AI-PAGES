import { ParticlesProvider } from '@tsparticles/react'
import { loadAll } from '@tsparticles/all'
import StarBackground from './StarBackground'

function App() {
  return (
    <ParticlesProvider init={async (engine) => { await loadAll(engine) }}>
      <StarBackground />
    </ParticlesProvider>
  )
}

export default App
