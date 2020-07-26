import React from 'react'

interface IPropsButtonToggle {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  added?: boolean
}

const ButtonToggle: React.FC<IPropsButtonToggle> = ({
  onClick,
  added = false,
}) => {
  return (
    <button type="button" onClick={onClick}>
      {added ? 'Remove' : 'Add'}
    </button>
  )
}

export default ButtonToggle
