function Home() {
    const element = document.createElement("div")
    const innerParagraph = document.createElement("p")

    innerParagraph.textContent = "Home page"

    element.appendChild(innerParagraph)

    return element
}

export default Home