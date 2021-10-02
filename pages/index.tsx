import Image from "../components/util/Image";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import useSWR from "swr";
import ProductBrief from "../components/product/ProductBrief";

export default function Home() {
  const home = useSWR("/api/home");
  if (!home.data) return <h1>Loading...</h1>;
  return (
    <div>
      <Header />
      <Navbar />
      <section className="section-intro padding-y-sm">
        <div className="container">
          <div className="intro-banner-wrap">
            <Image
              alt=""
              src="/images/banners/1.jpg"
              className="img-fluid rounded"
            />
          </div>
        </div>{" "}
      </section>

      <section className="section-content padding-y-sm">
        <div className="container">
          <article className="card card-body">
            <div className="row">
              <div className="col-md-4">
                <figure className="item-feature">
                  <span className="text-primary">
                    <i className="fa fa-2x fa-truck" />
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">Fast delivery</h5>
                    <p>
                      Dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore{" "}
                    </p>
                  </figcaption>
                </figure>{" "}
              </div>
              <div className="col-md-4">
                <figure className="item-feature">
                  <span className="text-primary">
                    <i className="fa fa-2x fa-landmark" />
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">Creative Strategy</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </figcaption>
                </figure>{" "}
              </div>
              <div className="col-md-4">
                <figure className="item-feature">
                  <span className="text-primary">
                    <i className="fa fa-2x fa-lock" />
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">High secured </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod
                    </p>
                  </figcaption>
                </figure>{" "}
              </div>{" "}
            </div>
          </article>
        </div>{" "}
      </section>

      <section className="section-content">
        <div className="container">
          <header className="section-heading">
            <h3 className="section-title">Popular products</h3>
          </header>
          <div className="row">
            {home.data.popular.map((product, index) => (
              <div key={index} className="col-md-3">
                <ProductBrief product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="container">
          <header className="section-heading">
            <h3 className="section-title">New arrived</h3>
          </header>
          <div className="row">
            {home.data.new.map((product, index) => (
              <div key={index} className="col-md-3">
                <ProductBrief product={product} />
              </div>
            ))}
          </div>
        </div>{" "}
      </section>

      <section className="section-content padding-bottom-sm">
        <div className="container">
          <header className="section-heading">
            <a href="#" className="btn btn-outline-primary float-right">
              See all
            </a>
            <h3 className="section-title">Recommended</h3>
          </header>
          <div className="row">
            {home.data.recommended.map((product, index) => (
              <div key={index} className="col-md-3">
                <ProductBrief product={product} />
              </div>
            ))}
          </div>
        </div>{" "}
      </section>

      <section className="section-name bg padding-y-sm">
        <div className="container">
          <header className="section-heading">
            <h3 className="section-title">Our Brands</h3>
          </header>
          <div className="row">
            <div className="col-md-2 col-6">
              <figure className="box item-logo">
                <a href="#">
                  <Image alt="" src="images/logos/logo1.png" />
                </a>
                <figcaption className="border-top pt-2">36 Products</figcaption>
              </figure>{" "}
            </div>{" "}
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <Image alt="" src="images/logos/logo2.png" />
                </a>
                <figcaption className="border-top pt-2">
                  980 Products
                </figcaption>
              </figure>{" "}
            </div>{" "}
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <Image alt="" src="images/logos/logo3.png" />
                </a>
                <figcaption className="border-top pt-2">25 Products</figcaption>
              </figure>{" "}
            </div>{" "}
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <Image alt="" src="images/logos/logo4.png" />
                </a>
                <figcaption className="border-top pt-2">72 Products</figcaption>
              </figure>{" "}
            </div>{" "}
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <Image alt="" src="images/logos/logo5.png" />
                </a>
                <figcaption className="border-top pt-2">41 Products</figcaption>
              </figure>{" "}
            </div>{" "}
            <div className="col-md-2  col-6">
              <figure className="box item-logo">
                <a href="#">
                  <Image alt="" src="images/logos/logo2.png" />
                </a>
                <figcaption className="border-top pt-2">12 Products</figcaption>
              </figure>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </section>

      <section className="section-name padding-y">
        <div className="container">
          <h3 className="mb-3">Download app demo text</h3>
          <a href="#">
            <Image
              alt=""
              src="images/misc/appstore.png"
              width={100}
              height={30}
            />
          </a>
          <a href="#">
            <Image
              alt=""
              src="images/misc/appstore.png"
              width={100}
              height={30}
            />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
