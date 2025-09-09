import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <CirclesWithBar
      height="200"
      width="200"
      color="#0af090"
      outerCircleColor="#0af090"
      innerCircleColor="#0af090"
      barColor="#0af090"
      ariaLabel="circles-with-bar-loading"
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
