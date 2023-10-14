var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');

console.log('Received ID:', id);

var httpRequest = new XMLHttpRequest();

    httpRequest.open("GET" , `https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    httpRequest.send();
    var res =[];
    httpRequest.onreadystatechange=function(){
        if (httpRequest.readyState == 4) {
            //console.log(JSON.parse(httpRequest.response))
            res = JSON.parse(httpRequest.response).recipe;
            console.log(res);
            displayInfo();
    }
}
function displayInfo(){
        var dat = `
            <div class="col-lg-10">
                <h2>TITLE : ${res.title}</h2>
                <p>SOCIAL RANK :${res.social_rank}</p>
                <img src="${res.image_url}" class="img-fluid"/>
                <br/>
                <a href="index.html">BACK</a>
            </div>
        `;
   document.getElementById("info").innerHTML=dat;
}
 
