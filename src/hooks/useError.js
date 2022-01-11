import { useDispatch } from "react-redux";
import { setError, closeError } from "../redux/error.slice";

export default useError = () => {
  const dispatch = useDispatch();
  return {
    showErrorModal: (message) => dispatch(setError(message)),
    hideErrorModal: () => dispatch(closeError()),
  };
};
