const BASE_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?"

$(function (){
    getJobs("python","usa"); //esta trayendo la data
});

//evento button
$(function () {
    $("#buscar_empleo").click(function (e) {
      e.preventDefault();
      var pais = $("#pais").find(":selected").text();
      var afinidad= $("#trabajo").find(":selected").text();
      console.log(pais, afinidad) //funciona!
    });   
});

function getJobs(type, location){
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

function printJob(job){
    var content = `
    <div class="card mb-3">
    <h5 class="card-header">${job.title}</h5>
      <div class="card-body">
        <div class="row">
        <div class="col md-4">
        <p class="font-weight-bold">Company</p>
        <p class>${job.company}</p>
      </div>
          <div class="col md-4">
            <p class="font-weight-bold">Location</p>
            <p class>${job.location}</p>
          </div>
          <div class="col md-4">
            <p class="font-weight-bold">Type</p>
            <p>${job.type}</p>
          </div>
        </div>
        <hr>
        <p class="card-text">${job.description}</p>
      </div>
  </div>
     `
        $('#jobs_container').append(content);
}
