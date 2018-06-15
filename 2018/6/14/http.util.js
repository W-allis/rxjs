function postJson(url,data){
	return Rx.Observable.fromPromise(
		$.ajax({
			type: 'post',
			url: url,
			headers: setHeader(),
			data: JSON.stringify(data),
			async: true
		}).promise()
	)
	.map(extractBody)
	.catch(handleError)
}

function getJson(url,data){
	url += urlData(data);
	return Rx.Observable.fromPromise(
		$.ajax({
			type: "get",
			url: url,
			async: true,
			headers: setHeader()
		}).promise()
	)
	.map(extractBody)
	.catch(handleError)
}

function handleError(res) {
//	if(res.status == 404){
//		location.href = '2.html?info=404'
//	}
//	if(res.status == 500){
//		location.href = '2.html?info=500'
//	}
	return Rx.Observable.throw({status:res.status,msg:res.responseText})
}

function extractBody(res){
	return JSON.parse(res);
}

function setHeader(){
	return {
		"token": localStorage.getItem('token'),
		"timestamp": localStorage.getItem('timestamp'),
		"foo": localStorage.getItem('foo')
	}
}

function urlData(data){
	var str = '';
	if(data){
		if(typeof data == 'object'){
			str += '?';
			for(var i in data){
				str += i + '=' + data[i] + '&';
			}
		}
	}
	return str.slice(0,-1);
}
