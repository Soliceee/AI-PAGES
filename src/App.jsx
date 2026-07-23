import CanvasNest from 'canvas-nest.js'
import { useEffect, useRef } from 'react'

function App() {
  const ref = useRef(null)

  useEffect(() => {
    const cn = new CanvasNest(ref.current, {
      color: '255,255,255',
      pointColor: '255,255,255',
      opacity: 0.5,
      count: 150,
      zIndex: 0,
    })
    cn.points.forEach(p => { p.max = 25000 })
    cn.current.max = 80000
    return () => cn.destroy()
  }, [])

  return (
    <div ref={ref} style={{
      position: 'fixed',
      inset: 0,
      background: '#0a0a14',
    }} />
  )
}

export default App
