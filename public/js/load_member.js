fetch("./member.json")
  .then((response)=>response.json())
  .then((json)=>{
    data = json.members;
    cur_arr = data;
    loadMembers(data);
  });

function loadMembers(arr){
  var container = document.querySelector(".team_container .row");
  container.innerHTML = "";
  var index = 1;
  for(let i of arr){
    container.innerHTML += `
    <div class="col-lg-3 col-sm-6">
      <div class="box ">
        <div class="img-box">
          <img src="images/${i.img}" class="img1" alt="" onError="this.onerror=null;this.src='/images/team-1.jpg';">
        </div>
        <div class="detail-box">
          <h5>
            ${i.name}
          </h5>
          <p>
            ${i.team}
          </p>
        </div>
        <div class="social_box">
          <a class="social-button" data-link="${i.linked_in}">
            <i class="fa fa-linkedin ${socialMissing(i.linked_in)}" aria-hidden="true"></i>
          </a>
          <a class="social-button" data-link="${i.instagram}">
            <i class="fa fa-instagram ${socialMissing(i.instagram)}" aria-hidden="true"></i>
          </a>
          <a class="social-button" data-link="${i.phone}">
            <i class="fa fa-phone ${socialMissing(i.phone)}" aria-hidden="true"></i>
          </a>
          <a class="social-button" data-link="${i.email}">
            <i class="fa fa-envelope ${socialMissing(i.email)}" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
    `
  }
  

  var button = document.querySelectorAll(".social-button")
  
  for(let i of button){
    i.addEventListener("click", function(e){
      if(!e.currentTarget.children[0].classList.contains("social-missing")){
        copy2Clipboard(e.currentTarget.dataset.link);
      }
    })
  }
}

async function copy2Clipboard(text){
  try {
    await navigator.clipboard.writeText(text);
    const alert = document.createElement("div");
    alert.style.cssText = `
      display:flex;
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: fit-content;
      border-radius: 5px;
      background-color: white;
      padding: 0px 13px 0px 0px;
      box-shadow: 0px 0px 4px black;
      align-items: center;
      overflow: hidden;
    `
    alert.innerHTML = `
      <div style="background-color: #00a3a3; padding: 15px 17px; margin-right: 20px; font-weight: bold; color: white;">&#10003;</div>
    `
    alert.innerHTML += `<div><b>Success!</b> The url has been copied.</div>`
    alert.innerHTML += `
      <button style="background-color: transparent; border: none; margin-left: 40px;">&#10005;</button>
    `
    alert.querySelector("button").addEventListener("click", function(){
      alert.remove();
    })
    document.body.appendChild(alert);
    setTimeout(function(){
      alert.remove();
    }, 15000)
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function socialMissing(text){
  if(text == null){
    return "social-missing";
  } else {
    return "";
  }
}

function sortByAlphabet(a, b){
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

function sortBySubteam(a, b){
  const nameA = a.team.toUpperCase(); // ignore upper and lowercase
  const nameB = b.team.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

function sortByYear(a, b){
  const nameA = a.year;
  const nameB = b.year;

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

function sortSubTeam(text){
  var new_arr = [];
  if(text == "All"){
    return data.sort(sortBySubteam);
  } else if(text == "Organizing"){
    for(let i of data){
      if(i.organizer){
        new_arr.push(i);
      }
    }
    return new_arr;
  } else {
    for(let i of data){
      if(i.team == text){
        new_arr.push(i);
      }
    }
    return new_arr;
  }
}

function sortYear(year){
  var new_arr = [];
  if(year == "All"){
    return data.sort(sortByYear);
  } else {
    for(let i of data){
      console.log("HELLO");
      if(i.year == parseInt(year)){
        new_arr.push(i);
      }
    }
    return new_arr;
  }
}