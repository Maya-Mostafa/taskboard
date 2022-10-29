export const mapToArr = (map) => {
    return Array.from(map, ([key, value]) => {
        return {col: key, tasks: value};
    });
};

// writing & reading from local storage
export const updateLocalStorage = (key, map) => {
    localStorage.setItem(key, JSON.stringify(Array.from(map.entries())));
};
export const readLocalStorage = (key) => {
    return new Map(JSON.parse(localStorage.getItem(key)));
};

