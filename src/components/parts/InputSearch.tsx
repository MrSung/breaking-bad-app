import React from 'react'

interface IPropsInputSearch {
  inputId: string
  inputPlaceholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputSearch: React.FC<IPropsInputSearch> = ({
  inputId,
  inputPlaceholder,
  onChange,
}) => {
  return (
    <form autoComplete="off">
      <label htmlFor={inputId}>
        <input
          type="text"
          id={inputId}
          placeholder={inputPlaceholder}
          onChange={onChange}
        />
      </label>
    </form>
  )
}

export default InputSearch
