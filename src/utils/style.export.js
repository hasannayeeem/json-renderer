import getRowCss from "./getRowCss";

let styles = document.getElementById("styles.import");

const exportStyle = (selector, style) => {
    const {className, tagName} = selector;
    style = getRowCss(style);
    styles.appendChild(document.createTextNode(`${tagName ? tagName : `.${className}`} {${style}}`))
}
export default exportStyle;