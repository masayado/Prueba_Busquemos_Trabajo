const BASE_URL = "https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?"

//evento button
$(function () {
    $("#buscar").click(function (e) {
      e.preventDefault(); 
      var pais = $("#pais").find(":selected").text();
      var afinidad= $("#trabajo").find(":selected").text();
      console.log(afinidad , pais)
    });   
});

function getJobs(type,location){
    axios.get(`${BASE_URL}description=${type}&location=${location}`)
        .then((resp)=>{
            //
            resp.data.forEach((job)=>{
                printJob(job);
            })
            console.log(resp);
        })
        .catch((error)=>{
            console.log(error);
        })
} 

function printJob(){
    var content =`
    <div id="jobs-container" class="jobs-container">
        <div class="location">
        ${job.location}
        </div>
        <div class="company">
        ${job.company}
        </div>
        <div class="type">
        ${job.type}
        </div>
        <div class="description">
        ${job.description}
        </div>
    </div>
    `
    $('#jobs-container').append(content);
}