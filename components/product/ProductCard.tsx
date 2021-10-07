import React from 'react'
import Button from '../ui/Button';
import Image from '../util/Image'

interface Props {
        imgUrl:string;
        name:string;
        price:number;
        oldPrice?:number;
        showNewBadge?:boolean;
        addToCartHandler:React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
}

const ProductCard:React.FC<Props> = (props) => {
    const {imgUrl,name,price,oldPrice,showNewBadge,addToCartHandler} = props;
    return (
        <figure className="card card-product-grid">
            <div className="img-wrap">
                {showNewBadge && <span className="badge badge-danger"> NEW </span>}
                <Image alt={name} src={imgUrl}
                />
                <a className="btn-overlay" href="#">
                    <i className="fa fa-search-plus" /> Quick view
                </a>
            </div>{" "}
            <figcaption className="info-wrap">
                <div className="fix-height">
                    <a href="#" className="title">
                        {name}
                    </a>
                    <div className="price-wrap mt-2">
                        <span className="price">${price}</span>
                        {oldPrice && <del className="price-old">${oldPrice}</del>}
                    </div>{" "}
                </div>
                <Button text="Add to cart" type="primary" showButtonAsLink onClickHandler={addToCartHandler} />
            </figcaption>
        </figure>
    )
}

export default ProductCard
