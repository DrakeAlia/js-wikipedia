const url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch="

const formDOM = document.querySelector(".form")
const inputDOM = document.querySelector(".form-input")
const resultsDOM = document.querySelector(".results")

// Initial Setup
// listen for submit events
formDOM.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = inputDOM.value
    // if empty value, display error
    if (!value) {
        resultsDOM.innerHTML =
            '<div class="error"> please enter a valid search term, thank you</div>'
        return
    }
    // create fetchPages()
    // pass valid input value into the 
    // fetchPages()
    fetchPages(value)
})

// Fetch Pages
const fetchPages = async (searchValue) => {
    // display loading while fetching
    resultsDOM.innerHTML = '<div class="loading"></div>'
    try {
        // construct dynamic url
        const response = await fetch(`${url}${searchValue}`)
        const data = await response.json()
        const results = data.query.search
        // display if error
        if (results.length < 1) {
            resultsDOM.innerHTML =
                '<div class="error">no matching results. Please try again</div>'
            return
        }
        // create renderResults()
        // pass valid results into renderResults()
        renderResults(results)
        // display error no items
    } catch (error) {
        resultsDOM.innerHTML = '<div class="error">there was an error..</div>'
    }
}

// Render Results
const renderResults = (list) => {
    // setup a card
    const cardsList = list
        // iterate over the list
        .map((item) => {
            // pull out title, snippet, pageid
            const { title, snippet, pageid } = item
            // set results with div.articles and list inside
            return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
        <h4>${title}</h4>
            <p>
        ${snippet}
            </p>
        </a>`
        })
        .join("")
    resultsDOM.innerHTML = `<div class="articles">
    ${cardsList}
    </div>`
}

console.log('Welcome to my version of Wikipedia');