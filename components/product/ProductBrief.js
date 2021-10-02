import React from "react";
import Image from "../util/Image";
import Link from "next/link";
function ProductBrief({ product }) {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="card card-product-grid">
        <a className="img-wrap">
          {" "}
          <Image alt="" src={product.img} />{" "}
        </a>
        <figcaption className="info-wrap">
          <a className="title">{product.name}</a>
          {product.star && (
            <div className="rating-wrap">
              <ul className="rating-stars">
                <li
                  style={{ width: product.star * 10 + "%" }}
                  className="stars-active"
                >
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </li>
              </ul>
              <span className="label-rating text-muted">
                {" "}
                {product.review} reviews
              </span>
            </div>
          )}
          <div className="price mt-1"> {product.price}</div>{" "}
        </figcaption>
      </div>
    </Link>
  );
}

export default ProductBrief;
