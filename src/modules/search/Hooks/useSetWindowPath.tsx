export const useSetWindowPath = (path: string) => {
    const setPath = (path: string) => {
        const checkPathName = path === ""
            ? window.location.pathname
            : `?search=${path}`;

        window.history.pushState({}, "", checkPathName);
    };

    return setPath(path);
};
