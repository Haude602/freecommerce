import React from 'react'
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'
import Navbar from '../../components/common/Navbar'
import Filters from './Filters'
import Products from './Products'

const Layout = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <section className="section-pagetop bg">
          <div className="container">
            <h2 className="title-page">Category products</h2>
            <nav>
              <ol className="breadcrumb text-white">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Best category</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Great articles
                </li>
              </ol>
            </nav>
          </div>{" "}
        </section>
        <section className="section-content padding-y">
        <div className="container">
        <div className="row">
        <aside className="col-md-3">
            <Filters/>
        </aside>
        <main className="col-md-9">
            <Products/>
        </main>
        </div>
        </div>
        </section>
        <Footer />
        </div>
    )
}

export default Layout;
