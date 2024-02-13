var page = "member";
var data = null;
cur_arr = null;

document.querySelector(`input[name="searchbar"]`).addEventListener("keyup", function(e){
    var text = e.currentTarget.value;
    var new_arr = [];

    if(cur_arr != null){
        for(let i of cur_arr){
            if(i.name.toLowerCase().includes(text)){
                new_arr.push(i);
            }
        }
    }
    loadMembers(new_arr);
});

document.querySelector(".sort").addEventListener("change", function(e){
    var subsort = document.querySelector(".subsort");
    var new_arr = null;
    if(e.currentTarget.value == "Alphabet"){
        new_arr = data.sort(sortByAlphabet);
        subsort.style.display = "";
        cur_arr = new_arr;
    } else if(e.currentTarget.value == "Subteam"){
        subsort.style.display = "initial";
        subsort.innerHTML = `
            <option>All</option>
            <option>Organizing</option>
            <option>BFFC</option>
            <option>Hydroponics</option>
            <option>Out Maine</option>
            <option>Community Knights</option>
        `
        new_arr = sortSubTeam(subsort.value);
        cur_arr = new_arr;
    } else if(e.currentTarget.value == "Year"){
        subsort.style.display = "initial";
        subsort.innerHTML = `
            <option>All</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        `
        new_arr = sortYear(subsort.value);
        cur_arr = new_arr;
    }
    loadMembers(data);
})

document.querySelector(".subsort").addEventListener("change", function(e){
    if(document.querySelector(".sort").value == "Subteam"){
        cur_arr = sortSubTeam(e.currentTarget.value);
        loadMembers(sortSubTeam(e.currentTarget.value));
    } else if(document.querySelector(".sort").value == "Year"){
        cur_arr = sortYear(e.currentTarget.value);
        loadMembers(sortYear(e.currentTarget.value));
    }
})