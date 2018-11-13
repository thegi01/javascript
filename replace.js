 let p = JSON.parse('{"' + decodeURI(queryString.params).replace(/,/g, "\",\"").replace(/:/g, "\":\"") + '"}')
