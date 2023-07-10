import React, { useEffect, useState } from 'react'

import Heading from './Heading'

interface DropdownItem {
  label: string
  value: string
}

export interface DropdownProps {
  className?: string
  options: DropdownItem[]
  placeholder?: string
  Icon?: any
  search?: boolean
  value: string | number | undefined
  onChange: (value: string) => void
  disabled?: boolean
}
const Dropdown = ({ className, placeholder, options, Icon = null, onChange, value: selectedOption = '', search, disabled = false }: DropdownProps) => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [filteredOptions, setFilteredOptions] = useState(options ?? [])

  useEffect(() => {
    if (input) {
      setFilteredOptions(options.filter(({ label }) => label.toLowerCase().indexOf(input.toLowerCase()) > -1))
    } else {
      setFilteredOptions(options)
    }
  }, [input, options])

  return (
    <div className={`${className} relative lg:max-w-sm 2xl:max-w-md`}>
      <Heading
        input={input}
        setInput={setInput}
        open={open}
        setOpen={setOpen}
        search={search}
        placeholder={placeholder}
        Icon={Icon}
        selectedOption={selectedOption}
        options={options}
        disabled={disabled}
      />
      <div
        className={`absolute left-0 right-0 h-0 overflow-hidden bg-white cursor-pointer z-10 max-h-72 overflow-y-auto rounded-sm shadow-gray-200 dark:shadow-transparent ${
          open && 'shadow'
        } dark:bg-gray-600`}
        style={open ? { height: `${56 * filteredOptions.length}px` } : {}}
      >
        {filteredOptions?.map(({ label, value }) => (
          <div
            key={value}
            className={`p-4 text-center ${selectedOption === value ? 'text-white bg-gray-400' : 'text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-500'}`}
            onClick={() => {
              onChange(value)
              setInput('')
              setOpen(false)
            }}
          >
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
