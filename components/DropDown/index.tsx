import { UilAngleDown } from '@iconscout/react-unicons'

import styles from './styles.module.css'

interface Option {
  value: string
  label: string
}

interface DropDownProps {
  value: string
  options: Option[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const DropDown = ({ value, options, onChange }: DropDownProps) => {
  return (
    <div className={`${styles.dropdown} relative text-center py-2.5 px-4 pr-2.5 uppercase`}>
      <label>
        <div className="flex-center justify-between w-full">
          <span>{value}</span>
          <UilAngleDown />
        </div>
        <select value={value} onChange={onChange} className="absolute px-4 appearance-none top-0 left-0 w-full h-full opacity-0 cursor-pointer">
          {options.map(({ value: optionValue, label: optionLabel }) => {
            if (optionValue === value) {
              return (
                <option key={optionValue} value={optionValue} disabled style={{ display: 'none' }}>
                  {optionLabel}
                </option>
              )
            }

            return (
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>
            )
          })}
        </select>
      </label>
    </div>
  )
}

export default DropDown
