import "../css/search.css";

function Search() {
    return (
        <div className="search-box">
            <img
                src="/images/icon-search.svg"
                alt="search"
                className="search-icon"
            />
            <input
                type="text"
                placeholder="Search by name or ingredient…"
                className="search-input"
            />
        </div>
    );
}

export default Search;
