type Props = {
  text: string
}

const ErrorLabel = ({ text }: Props) => {
  return (
    <div className="basket__input-simple-message">
      {text}
    </div>
  )
}

export default ErrorLabel