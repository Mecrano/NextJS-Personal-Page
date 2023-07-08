import React, { useEffect, useRef } from 'react'
import { UilAngleDown } from '@iconscout/react-unicons'

import type { DropdownProps } from '.'

interface HeadingProps extends Omit<Omit<DropdownProps, 'onChange'>, 'value'> {
  input: string
  setInput: React.Dispatch<string>
  open: boolean
  setOpen: React.Dispatch<boolean>
  selectedOption: string | number | null | undefined
  disabled?: boolean
}

const Heading = ({ input, setInput, open, setOpen, search, placeholder, Icon, selectedOption, options, disabled = false }: HeadingProps) => {
  const ref = useRef<HTMLInputElement>(null)

  const getSelectedOption = () => {
    // eslint-disable-next-line eqeqeq
    const { label } = options?.find(({ value }) => value == selectedOption) ?? { label: null }

    return label
  }

  useEffect(() => {
    if (open && search) {
      ref?.current?.focus()
    }
  }, [open, search])

  return (
    <div
      className={`text-gray-700 bg-white hover:bg-gray-100 ${
        disabled ? 'text-gray-200 bg-gray-300' : ''
      } cursor-pointer flex options-center justify-between py-3 px-4 rounded dark:text-white dark:bg-gray-700 dark:hover:bg-gray-500`}
      onClick={() => !disabled && setOpen(!open)}
    >
      {search && open ? (
        <input className="w-full" placeholder={placeholder} value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e?.target?.value ?? '')} ref={ref} />
      ) : (
        <span>{getSelectedOption() ?? <span className="text-[#4F5F76]">{placeholder}</span>}</span>
      )}
      {Icon ? <span>{disabled ? <Icon color="#B8C1CE" /> : <Icon />}</span> : disabled ? <UilAngleDown /> : <UilAngleDown />}
    </div>
  )
}

export default Heading
