function Filter({ titleFilter, setTitleFilter, rateFilter, setRateFilter }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Min rating"
        value={rateFilter}
        onChange={(e) => setRateFilter(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
