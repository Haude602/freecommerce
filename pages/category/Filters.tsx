import React from 'react'
import CheckBox from '../../components/product/filters/CheckBox'
import PriceRange from '../../components/product/filters/PriceRange'
import SearchBox from '../../components/product/filters/SearchBox'
import ToggleBox from '../../components/product/filters/ToggleBox'

const Filters = () => {
    return (
        <div className="card">
          <article className="filter-group">
           <SearchBox/>
          </article>{" "}
          <article className="filter-group">
            <CheckBox/>{" "}
          </article>{" "}
          <article className="filter-group">
            <PriceRange/>
          </article>{" "}
          <article className="filter-group">
           <ToggleBox/>
          </article>{" "}
          <article className="filter-group">
            <header className="card-header">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse_5"
                aria-expanded="false"
              >
                <i className="icon-control fa fa-chevron-down" />
                <h6 className="title">More filter </h6>
              </a>
            </header>
            <div
              className="filter-content collapse in"
              id="collapse_5"
              style={{}}
            >
              <div className="card-body">
                <label className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="myfilter_radio"
                    defaultChecked
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">
                    Any condition
                  </div>
                </label>
                <label className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="myfilter_radio"
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">Brand new </div>
                </label>
                <label className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="myfilter_radio"
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">Used items</div>
                </label>
                <label className="custom-control custom-radio">
                  <input
                    type="radio"
                    name="myfilter_radio"
                    className="custom-control-input"
                  />
                  <div className="custom-control-label">Very old</div>
                </label>
              </div>
            </div>
          </article>
        </div>
    )
}

export default Filters
