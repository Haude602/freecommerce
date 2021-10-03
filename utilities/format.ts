export const formatClassNames = (...classNamesList:string[]) : string => {
    return [...classNamesList].filter(Boolean).join(' ');
}