import PropTypes from "prop-types";



type PropsFirstComponent = {
  title: string,
  subTitle: number,
  name: string
}

export const FirstComponent = ({ title, subTitle, name }: PropsFirstComponent) => {
  return (
    <>
      <h1 data-testid="test-title" >{title}</h1>
      <p>{subTitle / 2}</p>
      <p>{name}</p>
      <div>FirstComponent</div>
    </>
  )
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number
}


FirstComponent.defaultProps = {
  title: "No Title",
  subtitle: 21,
  name: "No Name"
}
