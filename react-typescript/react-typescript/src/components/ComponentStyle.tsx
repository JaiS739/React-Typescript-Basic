import React from 'react'
type ContainerStyle = {
    styles : React.CSSProperties
}

const ComponentStyle = (props:ContainerStyle) => {
  return (
    <div style = {props.styles}>ComponentStyle</div>
  )
}

export default ComponentStyle