export const goToPage = (url: string): void => {
    window.location.href = url;
}

export const orRegExpMaker = (list: string[]): RegExp => {
    const finalReg: string = list.reduce((reg, s, i, self) => {
        reg += '^' + s + "$";
        if(i+1 !== self.length) reg += '|';
        return reg;
    }, '');

    return new RegExp(finalReg);
};