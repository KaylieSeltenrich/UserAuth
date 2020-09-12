let loggedInUser = Cookies.get("email");

if (loggedInUser == undefined) {
    document.getElementById("welcome-message").innerHTML = "No user is logged in!";
 }
    else {  
        document.getElementById("welcome-message").innerHTML = "Welcome " + loggedInUser;
}
   


    let ajax = new XMLHttpRequest();
    
    ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        let colours = JSON.parse(this.responseText);
        
        for (i = 0; i < colours.data.length; i++) {
                  
            document.getElementById("colours").innerHTML += "<h3>" + colours.data[i].name + "</h3>";
            
            document.getElementById("colours").innerHTML += "<h3>" + colours.data[i].year + "</h3>";
            
            let colourCodes = document.createElement("div");
            var parentElement = document.getElementById ("colours");
            parentElement.append(colourCodes);
            
            colourCodes.style.width = "50px";
            colourCodes.style.height = "50px";
            colourCodes.style.backgroundColor = colours.data[i].color;
         

    }
}
    
}

ajax.open("GET", "https://reqres.in/api/unknown", true);
ajax.send();
