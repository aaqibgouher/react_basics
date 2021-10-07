import Button from "./Button";

const Header = ({ title, onToggleForm, showFormProps }) => {

    return (
        <div className="row">
            <h2 className="col-sm-10">{title}</h2>
            <Button text={showFormProps ? "close" : "open"} color="btn btn-outline-dark" onClick={onToggleForm}/>
        </div>
    )
}

export default Header