import { connect } from "react-redux";
import App from "./App";
import { toAuthorize } from "./redux/thunks_creator";

const mapStateToProps = (state) => {
  return {
    isLoad: state.loading_.isLoad,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toAuthorize: () => dispatch(toAuthorize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


