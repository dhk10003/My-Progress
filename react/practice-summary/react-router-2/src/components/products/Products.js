import { Link } from "react-router-dom"


const Products = ({productsList}) => {
    
  return (
    <div>
        {productsList.map((product)=> {
            return(
                <Link key={product.id} to={`/product/${product.id}`}>
                    <div style={{border: "1px solid black", width:"50%", margin:"5px auto"}}>
                        <img style={{height:"150px"}} src={product.imageSrc} alt={product.imageSrc}  />
                        <h1> {product.title} </h1>
                        <p> $ {product.price} </p>
                        <p> {product.description} </p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Products