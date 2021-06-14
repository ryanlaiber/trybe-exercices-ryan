const hydrate = (str) => {
    if (typeof(str) != 'string') {
        throw new Error ('não é string');
    }
    const charList = str.split(' ');
    const result = charList.reduce((glassOfWater, char) => {
        const charNumber = parseInt(char);
        const charNotNumber = isNaN(charNumber);
        if (charNotNumber === false) {
            return glassOfWater + charNumber;
        }
        return glassOfWater;
    }, 0);
    

    const copo = (result === 1) ? 'copo' : 'copos';
    return `${result} ${copo} de água`;
};

module.exports = {hydrate};