import React, { useEffect, useMemo, useRef, useState } from "react"

const clear = canvas => {
  const { width, height } = canvas
  const ctx = canvas.getContext("2d")
  ctx.clearRect(0, 0, width, height)
}

export default ({ particles, lines, setClientPos }) => {
  const canvasRef = useRef(null)
  const [darkMode, setDarkMode] = useState(false)

  // setup
  useEffect(() => {
    const canvas = canvasRef.current
    const { width, height } = canvas
    if (canvas) {
      canvas.addEventListener("mousemove", function(e) {
        setClientPos([e.clientX / width, e.clientY / height])
      })

      canvas.addEventListener(
        "touchmove",
        function(e) {
          // stop touch event
          e.stopPropagation()
          e.preventDefault()

          setClientPos([e.clientX / width, e.clientY / height])
        },
        false
      )
    }
  }, [canvasRef, setClientPos, darkMode])

  // render
  useEffect(() => {
    const canvas = canvasRef.current
    const { width, height } = canvas
    const ctx = canvas.getContext("2d")

    if (!darkMode) {
      clear(canvas)
      particles.map(({ radius, position }) => {
        ctx.beginPath()
        ctx.arc(
          position[0] * width,
          position[1] * height,
          radius * height,
          0,
          2 * Math.PI,
          false
        )
        ctx.lineWidth = 1
        ctx.strokeStyle = "#000000"
        ctx.stroke()
        return false
      })
    }

    lines.map(({ start, end, strength }) => {
      ctx.beginPath()
      ctx.moveTo(start[0] * width, start[1] * height)
      ctx.lineTo(end[0] * width, end[1] * height)
      ctx.lineWidth = strength / 2
      if (darkMode) {
        ctx.strokeStyle = `rgba(${strength * 255}, ${strength *
          255}, ${strength * 255}, 0.3)`
      }
      ctx.stroke()
      return false
    })
  }, [particles, lines, darkMode])

  return useMemo(
    () => (
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasRef}
        onClick={e => {
          e.stopPropagation()
          setDarkMode(darkMode => {
            if (!darkMode) {
              clear(canvasRef.current)
            }
            return !darkMode
          })
        }}
      />
    ),
    [window.innerWidth, window.innerHeight, darkMode]
  )
}
