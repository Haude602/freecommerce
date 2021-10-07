import React from 'react';
import { dummyCheckBoxData } from './constants';
import FilterContainer from './Container/Container';


interface Props {}

const CheckBox:React.FC<Props> = (props) => {
    return (
        <div className="card-body">
            {dummyCheckBoxData.map((item,idx)=> (
                <label className="custom-control custom-checkbox" key={`checkboxFilter-${idx}`}>
                <input
                  type="checkbox"
                  className="custom-control-input"
                />
                <div className="custom-control-label">
                  {item.name}
                  <b className="badge badge-pill badge-light float-right">
                    {item.count}
                  </b>
                </div>
              </label>
            ))}
      </div>
    )
}

const CheckBoxWithContainer = (props) => <FilterContainer title="Brands"><CheckBox {...props} /></FilterContainer>

export default CheckBoxWithContainer
