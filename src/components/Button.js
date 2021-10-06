import PropTypes from "prop-types";

const Button = ({ text, color, onClick }) => {

    return (
        <button onClick={onClick} className={color}>{text} </button>
    )
}

Button.defaultProps = {
    color: "btn btn-outline-dark"
}

Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button