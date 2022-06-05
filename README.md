#### HTML Structure

- section.wiki
  - div.container
    - img
    - h3(text)
    - form.form
      - input.form-input type='text'
      - button.submit-btn (search) type='submit'
  - div.results
    - div.articles
      - a
        - h4
        - p (lorem20)

#### API DOCS

- [wiki docs](https://www.mediawiki.org/wiki/API:Main_page)

- ready to go url's

#### Initial Setup

- select form, input, results (X)
- listen for submit events (X)
- if empty value, display error (X)
- create fetchPages() (X)
- pass valid input value into the fetchPages() (X)

#### Fetch Pages

- display loading while fetching (X)
- construct dynamic url (X)
- display if error (X)
- display error no items (X)
- create renderResults() (X)
- pass valid results into renderResults() (X)

#### Render Results

- iterate over the list (X)
- pull out title, snippet, pageid (X)
- setup a card (X)
- set results with div.articles and list inside (X)
