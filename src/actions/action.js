import {
  ADD_SCREENING,
  UPDATE_SCREENING,
  ADD_LOCATION,
  LOGIN,
  UPDATE_REFRESH_STATUS,
  UPDATE_SCREENINGS,
} from "./actionType";
import axios from "axios";
//import createAction from "./createAction";

let nextTodoId = 0;
//export const updateScreenings = createAction(UPDATE_SCREENINGS, "payload");

export const addScreening = (content) => ({
  type: ADD_SCREENING,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const updateScreening = (content, index) => ({
  type: UPDATE_SCREENING,
  payload: {
    id: index,
    content,
  },
});

export const addLocation = (content) => ({
  type: ADD_LOCATION,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const login = (content) => ({
  type: LOGIN,
  payload: {
    content,
  },
});

export const updateRefreshStatus = (content) => ({
  //Fetch API
  type: UPDATE_REFRESH_STATUS,
  payload: {
    content,
  },
});

// export const updateScreenings = () => {
//   // axios.get("https://localhost:44340/Screening").then((res) => {
//   //   return {
//   //     type: UPDATE_SCREENINGS,
//   //     payload: {
//   //       res,
//   //     },
//   //   };
//   // });

//   return async (dispatch) => {
//     axios.get("https://localhost:44340/Screening").then((res) => {
//       dispatch({type: 'UPDATE_SCREENINGS', payload: res.data});
//   }}
//   };

// export const updateScreenings = () => {
//     axios.get("https://localhost:44340/Screening").then((res) =>{
//       Store.dis({type: UPDATE_SCREENINGS, payload: res.data});
//     });

// };

// export  const  updateScreenings = (response) => {
//     return {
//       type: UPDATE_SCREENINGS,
//       payload: response,
//     };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     updateScreenings
//   }, dispatch)
// }

//  export function refreshScreenings() {
// //  const response = await axios.get("https://localhost:44340/Screening");
//   return dispatch => {
//     dispatch(updateScreenings("data"));
//   }
//   //dispatch(updateScreenings(response.data));
// };

// export function refreshScreenings() {
//   return (dispatch) => {
//       // You can invoke sync or async actions with `dispatch`
//       dispatch(updateScreenings("Test"));
//   };
// }

export function refreshScreenings() {
  return function(dispatch, getState) {
      // You can invoke sync or async actions with `dispatch`
      axios.get("https://localhost:44340/Screening").then((res) => {
      dispatch({
        type: UPDATE_SCREENINGS,
        payload: res.data
    });
  });
    console.log('current state:', getState());
  };
}



// export const refreshScreenings = () => {
//   //Fetch API
//   // axios.get("https://localhost:44340/Screening").then((res) => {

//   return (dispatch) => {
//    // axios.get("https://localhost:44340/Screening").then((res) => {
//       dispatch(updateScreenings("test"));
//    // });
//   };

//   // };
//   //  updateScreenings(res.data);
//   //  });
// };

// export const updateScreenings = () => {
//   return async function(dispatch, getState) {
//     const response = await axios.get("https://localhost:44340/Screening");
//     dispatch({ type: UPDATE_SCREENINGS, payload:  response.data });
//   };
// };

// export const updateScreenings = async() => {
//   var response = await axios.get("https://localhost:44340/Screening");
//     return {
//       type: UPDATE_SCREENINGS,
//       payload: response.data,
//     };//
// };

// export  const  updateScreenings = (response) => {
//     return {
//       type: UPDATE_SCREENINGS,
//       payload: response,
//     };
// };

export function updateScreenings(response) {
  return {
      type: UPDATE_SCREENINGS,
      payload: response
  };
}