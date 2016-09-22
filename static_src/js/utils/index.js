export function querySelectArray(selector, el) {
    let elParam = el;
    if (!elParam) {
        elParam = document;
    }

    return Array.prototype.slice.call(elParam.querySelectorAll(selector));
}
