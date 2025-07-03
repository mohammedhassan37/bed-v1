function Navigation({ selectedSize, setSelectedSize, sliderValue, setSliderValue }) {
  const handleChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  return (

    <div className="navigation-container">
      <div className="navigation-items">
        <h1>Filters</h1>

        <select value={selectedSize} onChange={handleChange}>
          <option value="">All bed sizes</option>
          <option value="queen">Queen</option>
          <option value="bunk">Bunk</option>
          <option value="ottoman">Ottoman</option>
          <option value="daybed">Daybed</option>
        </select>

        <label htmlFor="sizeSlider" className="sizeSlider">Max price: ${sliderValue}</label>
        <input
          className="sizeSlider"
          type="range"
          min="0"
          max="1000"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
    </div>

  );
}

export default Navigation;
