import React from "react";
import Link from "next/link";

function Header({}) {
  return (
    <header className="section-header">
      <nav className="navbar navbar-dark navbar-expand p-0 bg-primary">
        <div className="container">
          <ul className="navbar-nav d-none d-md-flex mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Delivery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Payment
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                {" "}
                Call: +99812345678{" "}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                {" "}
                English{" "}
              </a>
              <ul
                className="dropdown-menu dropdown-menu-right"
                style={{ maxWidth: "100px" }}
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Arabic
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Russian{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>{" "}
        </div>{" "}
      </nav>{" "}
      <section className="header-main border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6">
              <Link href="/">
                <a className="brand-wrap">
                  <img className="logo" src="/images/logos/black.svg" />
                </a>
              </Link>
            </div>
            <div className="col-lg-6 col-12 col-sm-12">
              <form action="#" className="search">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-search" /> Search
                    </button>
                  </div>
                </div>
              </form>{" "}
            </div>{" "}
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="widgets-wrap float-lg-right">
                <div className="widget-header  mr-3">
                  <a href="#" className="icon icon-sm rounded-circle border">
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <span className="badge badge-pill badge-danger notify">
                    0
                  </span>
                </div>
                <div className="widget-header icontext">
                  <a href="#" className="icon icon-sm rounded-circle border">
                    <i className="fa fa-user" />
                  </a>
                  <div className="text">
                    <span className="text-muted">Welcome!</span>
                    <div>
                      <a href="#">Sign in</a> |<a href="#"> Register</a>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </header>
  );
}

export default Header;
