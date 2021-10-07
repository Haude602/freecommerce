import React from 'react'
import FilterContainer from './Container/Container';

const PriceRange = () => {
    const onChangeHandler = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className="card-body">
            <input
                type="range"
                className="custom-range"
                min={0}
                max={100}
                name="custom-range"
                onChange={onChangeHandler}
            />
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Min</label>
                    <input
                        className="form-control"
                        placeholder="$0"
                        type="number"
                    />
                </div>
                <div className="form-group text-right col-md-6">
                    <label>Max</label>
                    <input
                        className="form-control"
                        placeholder="$1,0000"
                        type="number"
                    />
                </div>
            </div>{" "}
            <button className="btn btn-block btn-primary">
                Apply
            </button>
        </div>
    )
}

const PriceRangeWithContainer = (props) => <FilterContainer title="Price Range"><PriceRange {...props} /></FilterContainer>

export default PriceRangeWithContainer; 
