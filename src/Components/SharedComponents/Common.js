export const defaultDateFormat = "LLL";

export const formatIntervalString = (string) => {
    return string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1 ').toLowerCase();
}