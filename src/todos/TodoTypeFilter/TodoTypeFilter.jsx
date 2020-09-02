import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./todoTypeFilter.css";

export default function TodoTypeFilter({
  filterTypes,
  selectedFilterType,
  onFilterChange,
  visibleItemCount,
}) {
  return (
    <div className="filter-type-item-wrapper">
      <span className="todo-filter-remaining">
        {visibleItemCount} items left
      </span>
      <div className="filter-items-wrapper">
        <i className="filter-items-icon">
          <FontAwesomeIcon icon={faFilter} color="Dodgerblue" />
        </i>
        <ul className="filter-type-list">
          {filterTypes.map((filterType) => (
            <li
              className="todo-filter-list-item"
              key={filterType}
              onClick={() => onFilterChange(filterType)}
            >
              <a
                style={{
                  fontWeight:
                    filterType === selectedFilterType ? "bold" : "normal",
                }}
                href="#/"
              >
                {filterType}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
