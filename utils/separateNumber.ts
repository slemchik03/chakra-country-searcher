const separateNumbers = (n: number) => {
    const firstCommaPos = n.toString().length % 3 || 3;
    const restCommaCount = (n.toString().length - firstCommaPos) / 3 - 1;
    const numArr = n.toString().split("");

    if (n.toString().length > 3) {
        numArr.splice(firstCommaPos, 0, ",");

        for (let i = 1; i <= restCommaCount; i++) {
            numArr.splice(firstCommaPos + i * 3 + i, 0, ",");
        }
    }
    return numArr.join("");
};

export default separateNumbers;
