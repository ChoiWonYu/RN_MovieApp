import React, { useState } from "react";
import { Data } from "./Data/Data";
import Pagenation from "./Pagenation";
const List = () => {
  const [curPage, setCurPage] = useState(1);
  const pageItems = 4;
  const firstIdx = (curPage - 1) * pageItems;
  return (
    <div>
      {Data.slice(firstIdx, firstIdx + pageItems).map((item) => (
        <div>
          <div>name : {item.name}</div>
          <div>age : {item.age}</div>
        </div>
      ))}
      <Pagenation
        pageItems={pageItems}
        curPage={curPage}
        setCurPage={setCurPage}
        length={Data.length}
      />
    </div>
  );
};

export default List;
