import { useRouteError } from "react-router-dom";

const Error = () => {
    const errorDetail = useRouteError();
    return(
        <>
            <h1>Error aa rhi h kaam me</h1>
            <p>{`${errorDetail.status}: ${errorDetail.statusText}`}</p>
        </>
    )
}

export default Error;