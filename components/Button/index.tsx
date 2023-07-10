import styles from './styles.module.css'

interface ButtonProps extends React.PropsWithChildren {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon'
  onClick?: () => void
  className?: string
}

const Button = ({ variant = 'primary', onClick = () => {}, className = '', children }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} gap-3 text-small md:text-small-md rounded text-center font-bold transition-all duration-100 ease-in-out ${styles[`button-${variant}`]} ${className} flex-center`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
