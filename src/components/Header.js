import Button from "./Button";

const Header = ({ title }) => {

    const onClick = () => {
        console.log("clicked");
    }

    return (
        <div className="row">
            <h2 className="col-sm-10">{title}</h2>
            <Button text="ADD" color="btn btn-outline-dark" onClick={onClick}/>
        </div>
    )
}

export default Header