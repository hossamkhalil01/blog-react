export function User({ username, name }) {

    return (

        <div className="user-div">
            <h3>Welcome: {username}</h3>
            <h3>{name}</h3>
        </div>
    )
}
