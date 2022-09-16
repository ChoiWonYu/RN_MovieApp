import React from "react";

const Pagenation = ({ pageItems, curPage, setCurPage, length }) => {
  const endPage = Math.ceil(length / pageItems);
  return (
    <div>
      <div
        onClick={() => {
          setCurPage((prev) => prev - 1);
        }}
      >
        &lt;
      </div>
      <div>
        {curPage}/{endPage}
      </div>
      <div
        onClick={() => {
          setCurPage((prev) => prev + 1);
        }}
      >
        &gt;
      </div>
    </div>
  );
};

export default Pagenation;
