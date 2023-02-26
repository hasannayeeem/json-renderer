import getRowCss from "./getRowCss";

let styles = document.getElementById("styles.import");

const exportStyle = (selector, style) => {
    const generatedStyle = getRowCss(style);
    styles.appendChild(document.createTextNode(`.${selector} {${generatedStyle}}`))
}
export default exportStyle;