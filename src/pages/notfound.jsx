import { useRouteError } from "react-router-dom"
const NotFound = ()=>{
    const error = useRouteError()
    
    return (
        <>
        <h1>pages not found error 404</h1>
        <p>{error.statusText || error.message}</p>
        </>
    )
}
export default NotFound