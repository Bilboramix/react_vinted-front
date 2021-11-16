const PublishInput = ({ state, set, ex }) => {
  return (
    <input
      value={state}
      onChange={(e) => {
        set(e.target.value);
      }}
      type="text"
      placeholder={ex}
    />
  );
};

export default PublishInput;
