import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../../Components/Product/product.scss'
import axios from '../../API/Index'
const SingleRoute = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`/products/${id}`).then(res => {
            setProduct(res.data)
            .catch((err) => (console.log(err)))
        })
    }, [id])
    return (
        <div className="card" key={product.id}>
            <Link to={`/Product${product.id}`}>
            <img src={product.images[0]} alt="Product" />
              </Link>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button>{product.brand}</button>
        </div>
    )

}

export default SingleRoute