import styles from './styles.module.css'

interface ButtonProps extends React.PropsWithChildren {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon'
  onClick?: () => void
  className?: string
}

const Button = ({ variant = 'primary', onClick = () => {}, className = '', children }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[`button-${variant}`]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
