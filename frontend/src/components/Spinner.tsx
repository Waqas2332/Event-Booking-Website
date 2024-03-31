import { ClipLoader } from "react-spinners";

type SpinnerProps = {
  loading: boolean;
};

const override = {
  display: "block",
  margin: "50px auto",
};

const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <ClipLoader
      color="#005153"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
