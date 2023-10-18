export const splitArray = (arr) => {
    const len = arr.length;
    const arr1 = arr.slice(0, Math.ceil(len/2));
    const arr2 = arr.slice(Math.ceil(len/2))

    return ([arr1, arr2]);
}