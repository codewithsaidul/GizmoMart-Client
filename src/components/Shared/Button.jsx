import PropTypes from 'prop-types';

const Button = ({ title, stl }) => {
  return (
    <button className={`btn text-white text-xl ${stl}`}>{title}</button>
  )
}


Button.propTypes = {
  title: PropTypes.string.isRequired,
  stl: PropTypes.string
}

export default Button