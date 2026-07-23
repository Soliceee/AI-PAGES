import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadAll } from '@tsparticles/all'

function StarBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine)
  }, [])

  const options = {
    fullScreen: { enable: true, zIndex: 0 },
    fpsLimit: 60,
    background: {
      color: '#0a0a14',
    },
    particles: {
      shape: { type: 'star' },
      size: {
        value: { min: 16, max: 36 },
      },
      color: { value: 'random' },
      number: { value: 60 },
      opacity: { value: 0.85 },
      move: { enable: false },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'trail',
        },
      },
      modes: {
        trail: {
          delay: 0.008,
          quantity: 2,
          particles: {
            shape: { type: 'star' },
            size: {
              value: { min: 14, max: 32 },
            },
            color: { value: 'random' },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 3,
                startValue: 'max',
                destroy: 'min',
              },
            },
            move: { enable: false },
            life: {
              count: 1,
              duration: { value: 1.5 },
            },
          },
        },
      },
    },
  }

  return <Particles id="starfield" init={particlesInit} options={options} />
}

export default StarBackground
