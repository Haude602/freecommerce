import React from 'react';
import { formatClassNames } from '../../../utilities/format';


interface Props {
    type: 'primary' | 'secondary';
    wrapperClassname?: string;
    text: string;
    onClickHandler: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
    showButtonAsLink?: boolean;
    linkHref?: string;
}

const Button: React.FC<Props> = (props) => {
    const { type, wrapperClassname, text, onClickHandler, showButtonAsLink, linkHref } = props;
    return (
        <>
            {!showButtonAsLink ?
                <div className={formatClassNames(`btn btn-block btn-${type}`, wrapperClassname)} onClick={onClickHandler}>
                    {text}
                </div> :
                <a href={linkHref ?? '#!'} className={formatClassNames(`btn btn-block btn-${type}`, wrapperClassname)} onClick={onClickHandler}>
                    {text}
                </a>}

        </>

    )
}

export default Button
