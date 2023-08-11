import { useParams, useLocation } from "react-router-dom"


const ProductDetail = ({ productsList }) => {

    const location = useLocation()

    // useLocation() returns the location object that represents the current URL. You can think about it like a useState that returns a new location whenever the URL changes.

    // useParams() returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    /*
    Our object returned from the useParams() function looks like this:
    {
        id: "1",
    }

    */

    // make sure to convert the id to a number since it is a string
    const id = Number(useParams().id)

    const product = productsList.find(product => product.id === id)

    console.log(productsList)
    return (

        <div style={{ border: "1px solid black", width: "75%", margin: "5px auto" }}>
            {/* <h1>{JSON.stringify(product)}</h1> */}
            <img style={{ height: "450px" }} src={product.imageSrc} alt={product.imageSrc} />
            <h1> {product.title} </h1>
            <p> $ {product.price} </p>
            <p> {product.description} </p>
            <p> {JSON.stringify(location)} </p>
        </div>

    )
}

export default ProductDetail