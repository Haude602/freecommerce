import React from "react";
import { useRouter } from "next/router";
import Image from "../../components/util/Image";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Navbar from "../../components/common/Navbar";
import PageHeader from "../../components/common/PageHeader";
import useSWR from "swr";

export default function Product() {
  const router = useRouter();
  const { productSlug } = router.query;

  const home = useSWR("/api/product/" + productSlug);

  if (!home.data) return <h1>Loading...</h1>;
  return (
    <div>
      <Header />
      <Navbar />
      <PageHeader title="Product Title" />
      <div className="card">
        <div className="row no-gutters">
          <aside className="col-sm-6 border-right">
            <article className="gallery-wrap">
              <div className="img-big-wrap">
                <a href="#">
                  <Image alt="" src="../images/items/9.jpg" />
                </a>
              </div>{" "}
              {/* img-big-wrap.// */}
              <div className="thumbs-wrap">
                <a href="#" className="item-thumb">
                  {" "}
                  <Image alt="" src="../images/items/9.jpg" />
                </a>
                <a href="#" className="item-thumb">
                  {" "}
                  <Image alt="" src="../images/items/10.jpg" />
                </a>
                <a href="#" className="item-thumb">
                  {" "}
                  <Image alt="" src="../images/items/7.jpg" />
                </a>
                <a href="#" className="item-thumb">
                  {" "}
                  <Image alt="" src="../images/items/8.jpg" />
                </a>
              </div>{" "}
              {/* thumbs-wrap.// */}
            </article>{" "}
            {/* gallery-wrap .end// */}
          </aside>
          <main className="col-sm-6">
            <article className="content-body">
              <h3 className="title">Logitec gaming headphone</h3>
              <div className="rating-wrap mb-3">
                <span className="badge badge-warning">
                  {" "}
                  <i className="fa fa-star" /> 3.8
                </span>
                <small className="text-muted ml-2">45 reviews</small>
              </div>
              <p>
                Here goes description consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco{" "}
              </p>
              <ul className="list-check mb-4">
                <li>Best performance of battery</li>
                <li>5 years warranty for this product</li>
                <li>Best performance of battery</li>
              </ul>
              <div className="item-option-select">
                <h6>Model</h6>
                <div
                  className="btn-group btn-group-sm btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-light active">
                    <input type="radio" name="radio_size" defaultChecked /> Xs
                  </label>
                  <label className="btn btn-light">
                    <input type="radio" name="radio_size" /> Xs Max
                  </label>
                </div>
              </div>
              <div className="item-option-select">
                <h6>Color</h6>
                <div
                  className="btn-group btn-group-sm btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-light">
                    <input type="radio" name="radio_color" /> Silver
                  </label>
                  <label className="btn btn-light active">
                    <input type="radio" name="radio_color" defaultChecked />{" "}
                    Gray
                  </label>
                  <label className="btn btn-light">
                    <input type="radio" name="radio_color" /> Gold
                  </label>
                </div>
              </div>
              <div className="item-option-select">
                <h6>Capacity</h6>
                <div
                  className="btn-group btn-group-sm btn-group-toggle"
                  data-toggle="buttons"
                >
                  <label className="btn btn-light active">
                    <input type="radio" name="options" defaultChecked /> 64 GB
                  </label>
                  <label className="btn btn-light">
                    <input type="radio" name="options" /> 256 GB
                  </label>
                  <label className="btn btn-light">
                    <input type="radio" name="options" /> 512 GB
                  </label>
                </div>
              </div>
              <div className="row mt-3 align-items-center">
                <div className="col">
                  <span className="price h4">$815.00</span>
                </div>{" "}
                {/* col.// */}
                <div className="col text-right">
                  <a href="#" className="btn  btn-primary">
                    {" "}
                    <span className="text">Add to cart</span>{" "}
                    <i className="icon fas fa-shopping-cart" />
                  </a>
                  <a href="#" className="btn  btn-light">
                    {" "}
                    <i className="fas fa-heart" />
                  </a>
                  <a href="#" className="btn  btn-light">
                    {" "}
                    <i className="fa fa-folder-plus" />
                  </a>
                </div>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </article>{" "}
            {/* product-info-aside .// */}
          </main>{" "}
          {/* col.// */}
        </div>{" "}
        {/* row.// */}
      </div>
      <article className="card">
        <div className="card-body">
          <div className="row">
            <aside className="col-md-6">
              <h5>Parameters</h5>
              <dl className="row">
                <dt className="col-sm-3">Display</dt>
                <dd className="col-sm-9">
                  13.3-inch LED-backlit display with IPS
                </dd>
                <dt className="col-sm-3">Processor</dt>
                <dd className="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
                <dt className="col-sm-3">Camera</dt>
                <dd className="col-sm-9">720p FaceTime HD camera</dd>
                <dt className="col-sm-3">Memory</dt>
                <dd className="col-sm-9">8 GB RAM or 16 GB RAM</dd>
                <dt className="col-sm-3">Graphics</dt>
                <dd className="col-sm-9">Intel Iris Plus Graphics 640</dd>
              </dl>
            </aside>
            <aside className="col-md-6">
              <h5>Features</h5>
              <ul className="list-check">
                <li>Best performance of battery</li>
                <li>5 years warranty for this product</li>
                <li>Amazing features and high quality</li>
                <li>Best performance of battery</li>
                <li>5 years warranty for this product</li>
              </ul>
            </aside>
          </div>{" "}
          {/* row.// */}
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>{" "}
        {/* card-body.// */}
      </article>
      <Footer />
    </div>
  );
}
