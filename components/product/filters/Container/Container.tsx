import React, { useState } from 'react';
import styles from './Container.module.scss';
import { formatClassNames } from '../../../../utilities/format';

interface Props {
    wrapperClassName?: string;
    title: string;
}

const FilterContainer: React.FC<Props> = (props) => {
    const { wrapperClassName, title } = props
    const [showDropdown, setShowDropdown] = useState<boolean>(true);

    const dropdownViewHandler = (): void => setShowDropdown(!showDropdown)
    return (
        <>
            <header className="card-header" onClick={dropdownViewHandler}>
                <a href="#">
                    <i className="icon-control fa fa-chevron-down" />
                    <h6 className="title">{title}</h6>
                </a>
            </header>
            {showDropdown && <div
                className={formatClassNames("filter-content collapse show", wrapperClassName)}
                id="collapse_1"
            >
                {props.children}
            </div>}
        </>
    )
}

export default FilterContainer
