// step 1: create a XHR object
var request = new XMLHttpRequest();
//step 2 .: create a connection
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
// step 3: send a request
request.send();
//once data sucessfully received from server
request.onload=function(){
    //conversion from string to array of json objects
    var data=JSON.parse(request.response);
    console.log(data);
    console.log(data[0].region)
    for(i=0;i<data.length;i++){
        console.log(data[i].name,data[i].capital,data[i].population)
    }
}
