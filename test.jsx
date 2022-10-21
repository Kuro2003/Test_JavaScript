GLOBAL.document = new JSDOM(html).window.document
const nodeList = document.querySelectorAll(".example");
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = "red";
}