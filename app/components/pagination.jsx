import React from "react";

function pagination ({ currentPage, totalPages, pageChange}) {
    return (
        <footer>
            <div className="pagination">
                <button disabled={currentPage <= 1} onClick={() => pageChange(currentPage - 1)}>
                Previous </button>
                <span id="pageInfo">Page {currentPage} of {totalPages}</span>
                <button disabled={currentPage >= totalPages} onClick={() => pageChange(currentPage + 1)}>
                    Next
                </button>
            </div>
        </footer>
    );
}

export default pagination;