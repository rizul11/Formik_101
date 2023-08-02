import {useReducer} from 'react'

function reducer(state, action){
    switch(action.type){
        case 'incremented_age': {
            return {
                name: state.name,
                age:state.age + 1
            };
        }
       case 'chnaged_name': {
        return {
            name:action.nextName,
            age:state.age
        };
       }
    }
    throw Error('Unknown action' + action.type);
}

const initialState = {}
function Reduce() {
  return (
    <div>
      
    </div>
  )
}

export default Reduce
