const initialState = [
  { id: 1, show: true, name: "main" },
  { id: 2, show: false, name: "weather" },
  { id: 3, show: false, name: "toDo" },
  { id: 4, show: false, name: "pomodoro" },
  { id: 5, show: false, name: "plot" },
  { id: 6, show: false, name: "fluff" },
  { id: 7, show: false, name: "settings" },
];

const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      const current = state.map((x) => {
        if (x.id === action.data.id) {
          return { ...x, show: true };
        }
        return x;
      });
      return [...current];
    case "HIDE":
      const curren = state.map((x) => {
        if (x.id === action.data.id) {
          return { ...x, show: false };
        }
        return x;
      });
      return [...curren];
    case "SHOW_ONE":
      const curr = state.map((x) => {
        if (x.id !== action.data.id) {
          return { ...x, show: false };
        } else if (x.id === action.data.id) {
          return { ...x, show: true };
        }
      });
      return [...curr];
    default:
      return state;
  }
};
export const showPage = (id) => {
  return {
    type: "SHOW",
    data: { id },
  };
};
export const hidePage = (id) => {
  return {
    type: "HIDE",
    data: { id },
  };
};
export const showOne = (id) => {
  console.log(id);
  return {
    type: "SHOW_ONE",
    data: { id },
  };
};
export default pagesReducer;
