const http = require('http')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const agent = new http.Agent({ keepAlive: true })
http.get(response => {
	response.setHeader('Content-Type', 'text/html')
	const html = 

})