import React from "react";

function header({ searchQuery, searchChange, sortOption, sortChange}) {
    return (
        <header>
            <div className="controls">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search for a movie ..."
                    value={searchQuery}
                    onChange={(e) => searchChange(e.target.value)}
                />
                <select
                    id="sortSelect"
                    value={sortOption}
                    onChange={(e) => sortChange(e.target.value)}>
                    <option value=""> Sort By</option>
                    <option value="date_asc">Release Date (Asc)</option>
                    <option value="date_desc">Release Date (Desc)</option>
                    <option value="rating_asc">Rating (Asc)</option>
                    <option value="rating_desc">Rating (Desc)</option>
                </select>
            </div>
        </header>
    );
}

export default header;