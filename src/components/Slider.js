import { Range } from "react-range";

const Slider = ({ priceFilters, setPriceFilters }) => {
  return (
    <div>
      <Range
        step={10}
        min={0}
        max={5000}
        values={priceFilters.values}
        onChange={(values) => setPriceFilters({ values })}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "350px",
              backgroundColor: "blue",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#999",
              borderRadius: 50,
            }}
          />
        )}
      />
    </div>
  );
};

export default Slider;
