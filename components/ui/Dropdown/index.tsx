import React from 'react'
import { formatClassNames } from '../../../utilities/format'

interface Props {
    wrapperClassname?:string;
}

const Dropdown: React.FC<Props> = (props) => {
    const {wrapperClassname} = props;
    return (
        <div className={formatClassNames('mr-2',wrapperClassname)}>
        <select className="form-control">
            <option>Latest items</option>
            <option>Trending</option>
            <option>Most Popular</option>
            <option>Cheapest</option>
        </select>
        </div>
    )
}

export default Dropdown
