
export const readLocalStorage = (key) => {
    return new Map(JSON.parse(localStorage.getItem(key)));
};

