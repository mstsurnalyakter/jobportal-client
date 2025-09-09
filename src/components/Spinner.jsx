import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <CirclesWithBar
      height="200"
      width="200"
      color="#00a26e"
      outerCircleColor="#00a26e"
      innerCircleColor="#00a26e"
      barColor="#00a26e"
      ariaLabel="circles-with-bar-loading"
      wrapperClass=""
      visible={true}
    />
  );
};

export default Spinner;
