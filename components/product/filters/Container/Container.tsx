import React from 'react';
import styles from './Container.module.scss';
import {formatClassNames} from '../../../../utilities/format';

interface Props {
    wrapperClassName?:string
}

const Container:React.FC<Props> = (props) => {
    const {wrapperClassName} = props
    return (
        <div className={formatClassNames([styles.mainWrapper,wrapperClassName])}>
            {props.children}
        </div>
    )
}

export default Container
