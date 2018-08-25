async function getPdfs() {
	/* if the request that ends up being sent is same-origin, this should work */
	/* may have to mess with where you specify async (or promises if you use promises) */
	const links = [...document.querySelectorAll('a')] // ...or whatever selector is necessary
	const pdfs = await links.map(link => {
		const pdfUrlString = null
		const init = {
			method: 'GET',
			mode: 'same-origin',
			credentials: 'same-origin',
			cache: 'no-cache', // in case the PDF has changed but you still have a cached copy
		}
		const pdf = fetch(link.attributes.href, init)
			.then(response => {
				const parser = new DOMParser()
				const dom = parser.parseFromString(response.text(), 'text/html')
				return dom.querySelector('a[href*="pdf"]')
			})
			.then(pdf => { pdfUrlString = pdf.attributes.href })

		return pdfUrlString
	})

	return pdfs
}

(async function() {
	await getPdfs()
	/* ...do something with this data */
})()
