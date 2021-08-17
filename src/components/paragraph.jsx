import React from "react"

function isAllowed(type) {
  const forbidden = ["img", "div", "figure"]
  let allowed = true

  forbidden.forEach((element) => {
    if (type === element) {
      allowed = false
    }
  })

  return allowed
}

export default function Paragraph({ children }) {
  if (
    typeof children.props !== "undefined" &&
    !isAllowed(children.props.mdxType)
  ) {
    return children
  } else {
    return <p>{children}</p>
  }
}
