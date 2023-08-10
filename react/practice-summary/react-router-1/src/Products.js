import { Link } from 'react-router-dom';

const Products = ({ products, setSelectedProduct }) => {

    return (
        <>
            {products.map((item) =>
                <Link
                    style={{ margin: "20px" }}
                    key={item.id}
                    to={`/Product/${item.id}`}
                    onClick={() => setSelectedProduct(item)}
                >
                    {item.name}
                </Link>
            )}
        </>

    )
}

export default Products