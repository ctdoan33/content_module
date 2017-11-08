var fs = require('fs');
module.exports = function(request, response){
	let path=request.url.slice(1);
	let type="text/html";
	if(path==="favicon.ico"){
		response.end();
		return;
	}else if(path.indexOf("images/")===0){
		type="image/"+path.slice(path.indexOf(".")+1);
	}else if(path.indexOf("stylesheets/")===0){
		type="text/css";
	}else if(path.length>0){
		path="views/"+path+".html";
	}else{
		path="views/index.html";
	}
	fs.readFile(path, function (errors, contents){
		response.writeHead(200, {'Content-type': type});
		response.write(contents);
		response.end();
	});
}