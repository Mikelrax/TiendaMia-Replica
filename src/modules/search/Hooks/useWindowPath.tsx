import { useEffect, useState } from "react";

const useWindowPath = () => {
    const [path, setPath] = useState("");
    useEffect(() => {
        const checkPathName = window.location.pathname;
        setPath(checkPathName);
    }, []);

    return path;
};

export default useWindowPath;