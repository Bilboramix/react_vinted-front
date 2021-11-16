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
              width: "200px",
              backgroundColor: "#02B3BB",
              margin: "0 15px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          return (
            <div
              {...props}
              style={{
                ...props.style,
                height: "15px",
                width: "15px",
                backgroundColor: "#02B3BB",
                border: "solid 1px white",
                borderRadius: 50,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span className="price-filter-value">{props["aria-valuenow"]}</span>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Slider;
