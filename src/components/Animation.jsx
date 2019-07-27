import React, { useState, useEffect } from "react"
import Canvas from "./Canvas"

const createParticle = ({
  speed = 0.005,
  repulsion = 0.00000001,
  attraction = 0.0001,
  connectSize = 0.25
}) => ({
  radius: 0.001,
  position: [Math.random(), Math.random()],
  direction: [Math.random() * speed, Math.random() * speed],
  update({ particles = [], index, clientPos }) {
    const lines = []
    particles.forEach((p, pIndex) => {
      // skip self
      if (pIndex !== index) {
        // get distance and vector
        const vector2peer = [
          p.position[0] - this.position[0],
          p.position[1] - this.position[1]
        ]
        const distance = Math.sqrt(
          vector2peer[0] * vector2peer[0] + vector2peer[1] * vector2peer[1]
        )

        // calculate repulsion
        if (true) {
          let force = [
            (repulsion * -vector2peer[0]) / (distance * distance),
            (repulsion * -vector2peer[1]) / (distance * distance)
          ]

          this.direction = [
            this.direction[0] + force[0],
            this.direction[1] + force[1]
          ]
        }

        // form new lines
        if (pIndex > index && distance < connectSize) {
          lines.push({
            start: this.position,
            end: p.position,
            strength: 1 - distance / connectSize
          })
        }
      }
    })

    // get client distance
    const vector2client = [
      clientPos[0] - this.position[0],
      clientPos[1] - this.position[1]
    ]

    const distance2client = Math.sqrt(
      vector2client[0] * vector2client[0] + vector2client[1] * vector2client[1]
    )

    // line to client
    if (distance2client < connectSize) {
      lines.push({
        start: this.position,
        end: clientPos,
        strength: 1 - distance2client / connectSize
      })
    }

    // calculate attraction
    const attractionForce = [
      attraction * vector2client[0] * distance2client,
      attraction * vector2client[1] * distance2client
    ]

    this.direction = [
      this.direction[0] + attractionForce[0],
      this.direction[1] + attractionForce[1]
    ]

    // update position
    this.position = [
      this.position[0] + this.direction[0],
      this.position[1] + this.direction[1]
    ]

    // [
    //   this.position[0] < 1 && this.position[0] > 0
    //     ? this.position[0] + this.direction[0]
    //     : 0.5 - (clientPos[0] - 0.5) * Math.random(),
    //   this.position[1] < 1 && this.position[1] > 0
    //     ? this.position[1] + this.direction[1]
    //     : 0.5 - (clientPos[1] - 0.5) * Math.random()
    // ]

    return { particle: this, lines }
  }
})

export default () => {
  const [state, setState] = useState({
    angle: 0,
    particles: Array(30)
      .fill()
      .map(() => createParticle({})),
    lines: []
  })

  const [clientPos, setClientPos] = useState([0.5, 0.5])

  useEffect(() => {
    const updateAnimationState = () => {
      let particles = []
      let lines = []

      state.particles.map((particle, index) => {
        const { particle: newParticle, lines: newLines } = particle.update({
          index,
          particles: state.particles,
          clientPos
        })

        particles.push(newParticle)
        lines = lines.concat(newLines)
        return false
      })

      setState(state => ({
        ...state,
        particles,
        lines
      }))
    }
    let animationFrameId = requestAnimationFrame(updateAnimationState)
    return () => cancelAnimationFrame(animationFrameId)
  }, [state, clientPos])

  return (
    <Canvas
      lines={state.lines}
      particles={state.particles}
      setClientPos={setClientPos}
    />
  )
}
