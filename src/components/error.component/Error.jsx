
const Error = ({error, navigate})=> {

    if(!error){
        navigate("/")
    }

    return <h1 className="error">{error}</h1>
}

export default Error