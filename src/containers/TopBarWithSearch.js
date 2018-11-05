import { connect } from "react-redux";
import { actionCreators } from "../states/actions";
import SearchAppBar from "../components/SearchAppBar";
 const { doChangeInput, doSelectTopic } = actionCreators;
 const mapStateToProps = state => ({
  currentInput: state.input.currentInput
});

 const mapDispatchToProps = dispatch => ({ 
  onInputChange: e => {
    dispatch(doChangeInput(e.target.value))
  },

  onTopicSet: e => {
    e.preventDefault();
    dispatch(doSelectTopic(e.target[0].defaultValue));
  }
});

 const TopBarWithSearch = connect(mapStateToProps, mapDispatchToProps)(SearchAppBar);
 

 export default TopBarWithSearch; 