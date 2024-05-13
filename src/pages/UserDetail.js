import { useParams, Link } from "react-router-dom"

function UserDetail() {
    const { userid } = useParams()

    return (
        <div>
            <h1>{userid}</h1>
            <Link to="/user">Back to user page</Link>
        </div>
    )
}

export default UserDetail