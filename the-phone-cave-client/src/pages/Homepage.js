function Homepage(props) {

    return (
        <>
            <h1>Welcome to the Phone Cave</h1>
            <h2>Discover our list of phones</h2>
            {props.phones?.map((phone) => {
                return (
                    <h3>Model : {phone.name}</h3>
                )
            })
            }
        </>
    )
}

export default Homepage;