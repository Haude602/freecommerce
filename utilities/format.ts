export const formatClassNames = (classNamesList:Array<string>) => {
    return classNamesList.filter(Boolean).join(' ');
}