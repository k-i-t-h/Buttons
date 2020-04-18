
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import "./FlashCard.css";

function FlashCard(props) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 10, tension: 600, friction: 80 }
  })

  return (
    <React.Fragment>
      <div onClick={() => set(state => !state)} className="d-flex justify-content-center">
        <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
          {props.data.question}
        </a.div>
        <a.div className={"c front text-dark"} style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
          {props.data.answer}
        </a.div>
      </div>
    </React.Fragment>
  )
}

export default FlashCard;