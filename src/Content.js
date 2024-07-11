function Content( ) {
    const element = document.createElement("div")

    const innerParagraph = document.createElement("h3")
    innerParagraph.textContent = "Come to our wonderful restaurant"

    element.appendChild(innerParagraph)
    return element;
}

export default Content