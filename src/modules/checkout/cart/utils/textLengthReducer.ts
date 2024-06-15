export const textReducer = (text: string, textLength: number) => {
    if (text.length > textLength) {
        return text.slice(0, textLength ) + "...";
    } else {
        return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
    }
}

/*const letterReducer = (state: string, action: any) => {
    switch (action.type) {
        case "ADD":
            return state + action.letter;
        case "REMOVE":
            return state.replace(action.letter, "");
        default:
            return state;
    }
};

export default letterReducer;*/