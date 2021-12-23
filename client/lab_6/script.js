document.addEventListener('DOMContentLoaded', () => {
    async function windowActions() {
        const data = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
        const request = await fetch(data)
        const vendors_list = await request.json()

        function findMatches(wordToMatch, vendors_list) {
            return vendors_list.filter(term => {
                const regex = new RegExp(wordToMatch, 'gi')
                return term.name.match(regex) || term.category.match(regex) ||
                term.address_line_1.match(regex) || term.city.match(regex) || term.zip.match(regex)
            });
        }
        function displayMatches(event) {
            const matchArray = findMatches(event.target.value, vendors_list)
        }
    }
}