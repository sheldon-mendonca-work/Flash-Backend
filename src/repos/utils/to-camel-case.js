const toCamelCaseCustom = (rows) => {
    const parsedRows = rows.map(row => {
        const replaced = {};
        for(let key in row){
            const camelCase = key.replace(/([a-z][-_][a-z])/gi, ($1) => {
                let splitString = $1.split('_');
                splitString[1] = splitString[1].toUpperCase();
                return splitString.join('');
            })
            replaced[camelCase] = row[key];
        }
        return replaced;
    })
    return parsedRows;
}

export default toCamelCaseCustom;