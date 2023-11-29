import { useState } from "react"
import { Divider, Input } from "antd";

function Search({ searchFood }) {
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value);
        searchFood(e.target.value);
    }

    return (
        <>
            <Divider>Search</Divider>
            <label htmlFor="search">Search</label>
            <Input type="text" value={search} name="search" id="search" onChange={handleSearch} />
        </>
    )
}

export default Search