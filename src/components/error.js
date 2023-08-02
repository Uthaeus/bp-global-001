import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <div className="errorpage">
            <h1 className="error-title">Something has gone wrong!</h1>
            <p className="error-subtitle">this page cannot be reached. please try again</p>
            <Link className="error-link" to='/'>back to homepage</Link>
        </div>
    );
}

export default ErrorPage;