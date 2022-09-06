function PhoneDetails(props) {
    
    return(
        <>
            <p><b>Manufacturer:</b> {props.phone?.manufacturer} </p>
            <p><b>Description:</b> {props.phone?.description}</p>
            <p><b>Color:</b> {props.phone?.color}</p>
            <p><b>Price:</b> {props.phone?.price}€</p>
            <p><b>Screen:</b> {props.phone?.screen}</p>
            <p><b>RAM:</b> {props.phone?.ram}</p>
        </>
    )
}

export default PhoneDetails;