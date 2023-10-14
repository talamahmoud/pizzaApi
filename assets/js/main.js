var httpReq = new XMLHttpRequest();
var result = [];
function getMenu(category){
    httpReq.open("GET" , `https://forkify-api.herokuapp.com/api/search?q=${category}`);
    httpReq.send();
    httpReq.onreadystatechange= function(){
        if(httpReq.readyState == 4){
            result = JSON.parse(httpReq.response).recipes;
            console.log(result);
            displayData();
        }
    }
}


function displayData(){
    var data = "";
    for (var i =0 ;i<result.length;i++){
        data+= `
            <div class="col-lg-3">
                <h2 class = "text-center">${result[i].title}</h2>
                <img src=${result[i].image_url} class="img-fluid"/>
                <a href = "details.html?id=${result[i].recipe_id}" >Show more</a>
            </div>
        `;
    }
    document.getElementById('menu').innerHTML=data;
}
var allLinks = document.querySelectorAll(".nav-link");
for(var i = 0 ; i < allLinks.length ; i++){
    allLinks[i].addEventListener("click", function (e){
        getMenu(e.target.innerHTML);
    })
}
getMenu("pizza");

