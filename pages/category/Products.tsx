import React from 'react'
import ProductCard from '../../components/product/ProductCard'
import Dropdown from '../../components/ui/Dropdown'

const Products = () => {
    return (
        <>
            <header className="border-bottom mb-4 pb-3">
                <div className="form-inline">
                    <span className="mr-md-auto">32 Items found </span>
                    <Dropdown />
                    <div className="btn-group">
                        <a
                            href="#"
                            className="btn btn-outline-secondary"
                            data-toggle="tooltip"
                            title="List view"
                        >
                            <i className="fa fa-bars" />
                        </a>
                        <a
                            href="#"
                            className="btn  btn-outline-secondary active"
                            data-toggle="tooltip"
                            title="Grid view"
                        >
                            <i className="fa fa-th" />
                        </a>
                    </div>
                </div>
            </header>
            <div className="row">
                {new Array(8).fill(0).map((_, idx) => {
                    return (
                        <div className="col-md-4" key={`product-item-${idx}`}>
                            <ProductCard imgUrl={`/images/items/${idx + 1}.jpg`} showNewBadge={idx === 0} name="Great item name goes here" price={1280} addToCartHandler={null} />
                        </div>
                    )
                })}
            </div>{" "}
            <nav className="mt-4" aria-label="Page navigation sample">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <a className="page-link" href="#">
                            Previous
                        </a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Products
