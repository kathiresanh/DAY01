// step 1: create a XHR object
var request = new XMLHttpRequest();
//step 2 .: create a connection
request.open('GET','https://restcountries.com/v3.1/all',true);
// step 3: send a request
request.send();TrackEvent
//once data sucessfully received from server
request.onload=function(){
    //conversion from string to array of json objects
    var data=JSON.parse(request.response);
    console.log(data);
    console.log(data[0].region)
    for(i=0;i<data.length;i++){
        console.log(data[i].name.official,data[i].region)
    }
}
