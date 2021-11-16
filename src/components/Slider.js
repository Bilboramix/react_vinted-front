import { Range } from "react-range";

const Slider = ({ priceFilters, setPriceFilters }) => {
  return (
    <div>
      <Range
        step={10}
        min={0}
        max={1500}
        values={priceFilters.values}
        onChange={(values) => setPriceFilters({ values })}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "2px",
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
              height: "15px",
              width: "15px",
              backgroundColor: "white",
              border: "solid 1px gray",
              borderRadius: 50,
            }}
          />
        )}
      />
    </div>
  );
};

export default Slider;
