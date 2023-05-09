import React, { useState } from "react";

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="portfolio__list">
      {list.map((category, key) => (
        <button
          className={`${active === key ? 'active' : ''} portfolio__list-item text-cs`}
          key={key}
          onClick={() => {
            setActive(key)
            filterItems(category)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default List;
