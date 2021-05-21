import { themes } from "../data/data";

export const Themes = {
  get: () => {
    const currentTheme = localStorage.getItem("themes");
    if (!!currentTheme) {
      return JSON.parse(currentTheme);
    }
    return undefined;
  },
  set: (themes) => {
    localStorage.setItem("themes", JSON.stringify(themes));
  },
  add: (theme) => {
    const all = Themes.get();
    all ? Themes.set([...all, theme]) : Themes.set([theme]);
  },
};

export const Design = {
  get: () => {
    const lsDesign = localStorage.getItem("design");
    if (!!lsDesign) return Themes.parse(lsDesign);
    return undefined;
  },
  getWithFallback: () => {
    try {
      return Design.get() || themes[0];
    } catch {
      console.error("Your currently applied design appears to be corrupted.");
      return themes[0];
    }
  },

  set: (design) => localStorage.setItem("design", JSON.stringify(design)),
};

export const Weather = {
  getKey: () => {
    const key = localStorage.getItem("weatherKey");
    if (!!key) return JSON.parse(key);
    return undefined;
  },
  getCityName: () => {
    const cityName = localStorage.getItem("cityName");
    if (!!cityName) return JSON.parse(cityName);
    return undefined;
  },
  setKey: (key) => {
    localStorage.setItem("weatherKey", JSON.stringify(key));
  },
  setCityName: (name) => {
    localStorage.setItem("cityName", JSON.stringify(name));
  },
};

export const ToDo = {
  getAll: () => {
    const toDo = localStorage.getObj("toDo");
    if (!!toDo) return toDo;
    return undefined;
  },
  add: (note) => {
    const current = localStorage.getObj("toDo");
    if (!!current) {
      let highestId = 0;
      current.forEach((elem) => {
        if (elem.id > highestId) highestId = elem.id;
      });
      console.log(highestId);
      const newArr = localStorage.setObj("toDo", [
        ...current,
        { ...note, id: highestId + 1, done: false },
      ]);
      return newArr;
    }
    localStorage.setObj("toDo", [{ ...note, id: 0, done: false }]);
    return [note];
  },
  delete: (id) => {
    const current = localStorage.getObj("toDo");

    const newArr = current
      .map((elem) => {
        if (elem.id === id) {
          return undefined;
        }
        return elem;
      })
      .filter((x) => x !== undefined);
    localStorage.setObj("toDo", [...newArr]);
  },
  toggleDone: (id) => {
    const current = localStorage.getObj("toDo");

    const newArr = current.map((elem) => {
      if (elem.id === id) {
        return { ...elem, done: !elem.done };
      }
      return elem;
    });
    localStorage.setObj("toDo", [...newArr]);
  },
};

export const PomodoroPage = {
  getMinutes: () => {
    const minutes = localStorage.getItem("minutes");
    if (!!minutes) return JSON.parse(minutes);
    return undefined;
  },
  getBreakMinutes: () => {
    const minutes = localStorage.getItem("breakMinutes");
    if (!!minutes) return JSON.parse(minutes);
    return undefined;
  },
  getSeconds: () => {
    const seconds = localStorage.getItem("seconds");
    if (!!seconds) return JSON.parse(seconds);
    return undefined;
  },
  setMinutes: (minutes) => {
    localStorage.setItem("minutes", JSON.stringify(minutes));
  },
  setBreakMinutes: (minutes) => {
    localStorage.setItem("breakMinutes", JSON.stringify(minutes));
  },
  setSeconds: (seconds) => {
    localStorage.setItem("seconds", JSON.stringify(seconds));
  },
};
