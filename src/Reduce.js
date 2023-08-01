import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "chnaged_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action" + action.type);
}

const initialState = { name: "Taylor", age: 42 };

function Reduce() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }
  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  return (
      <>
    <input type="text" />  
      </>;
    )
      
    
}

export default Reduce;
