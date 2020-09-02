import React from "react";

export default function TodoTypeFilter({
  filterTypes,
  selectedFilterType,
  onFilterChange,
}) {
  return (
    <div>
      {filterTypes.map((filterType) => (
        <span
          style={{ margin: 5 }}
          key={filterType}
          onClick={() => onFilterChange(filterType)}
        >
          {filterType}
        </span>
      ))}
    </div>
  );
}
