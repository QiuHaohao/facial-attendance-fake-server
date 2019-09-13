var http = require('http');
const URL = require('url');
const data = require('./data.json')

const isEmptyObject = (obj)=> {
	return Object.entries(obj).length === 0
}

//create a server object:
http.createServer(function (req, res) {
	const url = req.url
	const urlParsed = URL.parse(url, {parseQueryString: true})
	const urlQuery = urlParsed.query
	const urlPathname = urlParsed.pathname
	if (!isEmptyObject(urlQuery)) {
		const firstQueryKey = Object.keys(urlQuery)[0]
		const firstQueryValue = urlQuery[firstQueryKey]
		const response = JSON.stringify(data[urlPathname][firstQueryKey][firstQueryValue])
		res.write(response)
	} 
	else {
		res.write("No response."); //write a response to the client
	}
	res.end()
}).listen(8080); //the server object listens on port 8080