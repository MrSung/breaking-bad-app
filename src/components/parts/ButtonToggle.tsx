import React from 'react'

interface IPropsButtonToggle {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonToggle: React.FC<IPropsButtonToggle> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Add
    </button>
  )
}

export default ButtonToggle
