
import './style.css';
import { Product } from '../@types';
type ProductProps = {
    items: Product[] 
}


export function Products(props: ProductProps) {
    return (
        <div className="brands">
            <ul>
                { props.items.map(item => {
                    return <div className="products">
                        <div className="card">
                            <img src={`assets/images/${item.photo}`} alt={item.photo} />
                            <div className="card-body">
                                <h5>{item.name}</h5>
                                <div className="details">
                                    <div className="star-rating">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                    <div className="price">
                                        <h3>R$ {item.price}</h3>
                                        <p>10 x R$ {item.price / 10}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </ul>
        </div>

    )
}