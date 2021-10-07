import React from 'react'
import FilterContainer from './Container/Container'

const ToggleBox = () => {
    return (
        <div className="card-body">
        <label className="checkbox-btn">
          <input type="checkbox" />
          <span className="btn btn-light"> XS </span>
        </label>
        <label className="checkbox-btn">
          <input type="checkbox" />
          <span className="btn btn-light"> SM </span>
        </label>
        <label className="checkbox-btn">
          <input type="checkbox" />
          <span className="btn btn-light"> LG </span>
        </label>
        <label className="checkbox-btn">
          <input type="checkbox" />
          <span className="btn btn-light"> XXL </span>
        </label>
      </div>
    )
}

const ToggleBoxWithContainer = (props) => <FilterContainer title="Sizes"> <ToggleBox {...props} /> </FilterContainer>

export default ToggleBoxWithContainer;
