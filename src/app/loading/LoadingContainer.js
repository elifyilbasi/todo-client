import Loading from "./Loading";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  loadingCounter: state.loading.loadingCounter,
});

export default connect(mapStateToProps)(Loading);
