import React from 'react';
import styles from './Container.module.scss';
import { formatClassNames } from '../../../../utilities/format';

interface Props {
    wrapperClassName?: string
}

const FilterContainer: React.FC<Props> = (props) => {
    const { wrapperClassName } = props
    return (
        <div
            className={formatClassNames("filter-content collapse show", wrapperClassName)}
            id="collapse_1"
        >
            {props.children}
        </div>
    )
}

export default FilterContainer
