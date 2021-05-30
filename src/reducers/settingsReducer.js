const initialState = [
  { id: 1, show: true, name: "appearance" },
  { id: 2, show: false, name: "weather" },
  { id: 3, show: false, name: "pomodoro" },
  { id: 4, show: false, name: "analitics" },
];

const settingsReducer = (state = initialState, action) => {
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
    case "SHOW_ONE_SETTING":
      const curr = state.map((x) => {
        if (x.id !== action.data.id) {
          return { ...x, show: false };
        } else if (x.id === action.data.id) {
          return { ...x, show: true };
        }
        return undefined;
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
export const showOneSetting = (id) => {
  console.log(id);
  return {
    type: "SHOW_ONE_SETTING",
    data: { id },
  };
};
export default settingsReducer;
