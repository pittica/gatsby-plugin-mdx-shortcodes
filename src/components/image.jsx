import React from "react"

export default function Image({ src, alt, title, width, height }) {
  return (
    <figure className="image">
      <img src={src} alt={alt} title={title} width={width} height={height} />
    </figure>
  )
}
