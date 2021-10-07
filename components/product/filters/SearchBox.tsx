import React, { useState } from 'react';
import { dummySearchData } from './constants';
import FilterContainer from './Container/Container';

interface Props {
    popularSearchTags?: Array<string>
}
const SearchBox: React.FC<Props> = (props) => {
    const { popularSearchTags = dummySearchData } = props;
    const [results,setResults] = useState<Array<string>>(popularSearchTags)
    const [query,setQuery] = useState<string>('')

    const inputChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

    const searchHandler = () => {
        const result = results.filter(item=>item.toLowerCase().includes(query));
        if(result.length>0)
            setResults(result);
    }



    return (
        <div className="card-body">
            <form className="pb-3">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        onChange={inputChangeHandler}
                    />
                    <div className="input-group-append" onClick={searchHandler}>
                        <button className="btn btn-light" type="button">
                            <i className="fa fa-search" />
                        </button>
                    </div>
                </div>
            </form>
            <ul className="list-menu">
                {results.map((item, idx) => (
                    <li key={`popular-search-tag-${idx}`}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const SearchBoxWithContainer = (props) => <FilterContainer title="Product type"> <SearchBox {...props} /> </FilterContainer>

export default SearchBoxWithContainer;
