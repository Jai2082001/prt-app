import './Nbtn.css'

const Nbtn = ({children}) => {
    return (
        <div className="myButton">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {children}
        </div>
    )
}

export default Nbtn