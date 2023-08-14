const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItem = []

getData()

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const {
        results
    } = await res.json()

    // clear results
    results.innrerHTML = ''

    results.forEach(user => {

    })
}