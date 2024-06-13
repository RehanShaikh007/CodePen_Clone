
import { Vortex } from "react-loader-spinner";
 const Spinner = () => {
  return (
    <Vortex
      visible={true}
      height="100"
      width="100"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['green', 'white', 'green', 'white', 'white', 'green' ]}
    />
  );
};

export default Spinner;