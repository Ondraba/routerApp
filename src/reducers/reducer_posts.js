import {FETCH_POSTS, FETCH_POST} from '../actions/index';
const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_POST:
      return { ...state, post: action.payload.data };

    case FETCH_POSTS:
     return { ...state, all: action.payload.data }
     //payload sou skutecna data oddela od protocol overhead
    default:
     return state;
  }
}

//nejdriv se fetchnout po renderu posty
// //function App2() {
//   const props = {firstName: 'Ben', lastName: 'Hector'};
//   return <Greeting {...props} />;
// }


//return { ...state, all: action.payload.data }
//znamena ze obsahuje vsechny property state a zaroven nastavuje novou hodnotu all variablu
//vlastne rikam ze all vrati naprosto vsechna data
// //{
//     all: ["hello", "world"],
//     post: null
// }
