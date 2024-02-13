var title = {
    org: "Organization",
    purpose: "Purpose",
    contact: "Contact"
}

var subtitle = {
    name: "Name",
    what: "What do you guys do?",
    why: "Why are you reaching out to us?",
    how: "How can we help?",
    nameperson: "Name of Person to Contact",
    email: "Email"
}

document.querySelector(".submit").addEventListener("click", function(){
    var obj = {
        org: {
            name: document.querySelector(".form-org-name").value,
            what: document.querySelector(".form-org-what").value
        },
        purpose:{
            why: document.querySelector(".form-purpose-why").value,
            how: document.querySelector(".form-purpose-how").value
        },
        contact:{
            nameperson: document.querySelector(".form-contact-nameperson").value,
            email: document.querySelector(".form-contact-email").value,
            phone: document.querySelector(".form-contact-phone").value
        }
    }
    document.querySelector(".error").innerHTML = "";
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            for(var key2 in obj[key]){
                if(obj[key].hasOwnProperty(key2)){
                    document.querySelector(`.form-${key}-${key2}`).style.backgroundColor = "";
                    document.querySelector(`.form-${key}-${key2}`).style.border = "";
                    if(obj[key][key2] == "" && key2 != "phone"){
                        document.querySelector(`.form-${key}-${key2}`).style.backgroundColor = "rgb(255, 203, 203)";
                        document.querySelector(`.form-${key}-${key2}`).style.border = "1px solid rgb(177, 44, 44)";
                        document.querySelector(".error").style.display = "inherit";
                        document.querySelector(".error").innerHTML += `
                            <div>${title[key]}: <b>${subtitle[key2]}</b> is a required field.</div>
                        `;
                    }
                }
            }
        }
    }
    if(document.querySelector(".error").innerHTML == ""){
        document.querySelector(".error").style.display = "none";
        fetch("/partner-with-us", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-type": "application/json"
            }
        });
    } else {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `<b>* All fields are required</b>`
        document.querySelector(".error").prepend(newDiv);
    }
})