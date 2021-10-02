import React from "react";
import Image from "../../components/util/Image";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Navbar from "../../components/common/Navbar";

export default function Cart() {
  return (
    <div>
      <Header />
      <Navbar />

      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Shopping cart</h2>
        </div>{" "}
      </section>

      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <div className="card">
                <div className="row no-gutters">
                  <aside className="col-md-12">
                    <article className="card-body border-bottom">
                      <div className="row">
                        <div className="col-md-7">
                          <figure className="itemside">
                            <div className="aside">
                              <Image
                                alt=""
                                src="/images/items/1.jpg"
                                className="border img-sm"
                              />
                            </div>
                            <figcaption className="info">
                              <a href="#" className="title">
                                Some name of item goes here nice{" "}
                              </a>
                              <strong className>$128.00</strong>
                              <div>
                                <a href="#" className="btn-link mr-2">
                                  Save for later
                                </a>
                                <a href="#" className="btn-link text-danger">
                                  {" "}
                                  Delete
                                </a>
                              </div>
                            </figcaption>
                          </figure>
                        </div>{" "}
                        <div className="col-md-5 text-md-right text-right">
                          <div className="input-group input-spinner">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-plus"
                              >
                                {" "}
                                <i className="fa fa-plus" />{" "}
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={1}
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-minus"
                              >
                                {" "}
                                <i className="fa fa-minus" />{" "}
                              </button>
                            </div>
                          </div>{" "}
                        </div>
                      </div>{" "}
                    </article>{" "}
                    <article className="card-body border-bottom">
                      <div className="row">
                        <div className="col-md-7">
                          <figure className="itemside">
                            <div className="aside">
                              <Image
                                alt=""
                                src="/images/items/2.jpg"
                                className="border img-sm"
                              />
                            </div>
                            <figcaption className="info">
                              <a href="#" className="title">
                                Product name goes here nice{" "}
                              </a>
                              <strong className>$128.00</strong>
                              <div>
                                <a href="#" className="btn-link mr-2">
                                  Save for later
                                </a>
                                <a href="#" className="btn-link text-danger">
                                  {" "}
                                  Delete
                                </a>
                              </div>
                            </figcaption>
                          </figure>
                        </div>{" "}
                        <div className="col-md-5 text-md-right text-right">
                          <div className="input-group input-spinner">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-plus"
                              >
                                {" "}
                                <i className="fa fa-plus" />{" "}
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={1}
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-minus"
                              >
                                {" "}
                                <i className="fa fa-minus" />{" "}
                              </button>
                            </div>
                          </div>{" "}
                        </div>
                      </div>{" "}
                    </article>{" "}
                    <article className="card-body border-bottom">
                      <div className="row">
                        <div className="col-md-7">
                          <figure className="itemside">
                            <div className="aside">
                              <Image
                                alt=""
                                src="/images/items/3.jpg"
                                className="border img-sm"
                              />
                            </div>
                            <figcaption className="info">
                              <a href="#" className="title">
                                Another name of some product goes just{" "}
                              </a>
                              <strong className>$98.50</strong>
                              <div>
                                <a href="#" className="btn-link mr-2">
                                  Save for later
                                </a>
                                <a href="#" className="btn-link text-danger">
                                  {" "}
                                  Delete
                                </a>
                              </div>
                            </figcaption>
                          </figure>
                        </div>{" "}
                        <div className="col-md-5 text-md-right text-right">
                          <div className="input-group input-spinner">
                            <div className="input-group-prepend">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-plus"
                              >
                                {" "}
                                <i className="fa fa-plus" />{" "}
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={1}
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-light"
                                type="button"
                                id="button-minus"
                              >
                                {" "}
                                <i className="fa fa-minus" />{" "}
                              </button>
                            </div>
                          </div>{" "}
                        </div>
                      </div>{" "}
                    </article>{" "}
                  </aside>{" "}
                </div>{" "}
                <div className="row">
                  <div className="card-body">
                    <button className="btn btn-light">Continue Shopping</button>
                    <button className="ml-2 btn btn-primary">
                      {" "}
                      Make Purchase{" "}
                    </button>
                  </div>{" "}
                </div>
              </div>

              <div className="alert alert-success mt-3">
                <p className="icontext">
                  <i className="icon text-success fa fa-truck" /> Free Delivery
                  within 1-2 weeks
                </p>
              </div>
            </main>{" "}
            <aside className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name
                          placeholder="Coupon code"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>{" "}
              </div>{" "}
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">USD 568</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right">USD 658</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right  h5">
                      <strong>$1,650</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <Image alt="" src="images/misc/payments.png" height={26} />
                  </p>
                </div>{" "}
              </div>{" "}
            </aside>{" "}
          </div>
        </div>{" "}
      </section>

      <section className="section-name bg padding-y">
        <div className="container">
          <h6>Payment and refund policy</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
