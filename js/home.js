let loggedInUser = Cookies.get("email");
Cookies.get("token");
       
function removeCookies () {
    Cookies.remove("token");
    Cookies.remove("email");
}

if (loggedInUser == undefined) {
    document.getElementById("welcome-message").innerHTML = "No user is logged in!" + '<br> <a href ="index.html"> Click here to go back to the homepage! </a>' 
 }
    else {  
        document.getElementById("welcome-message").innerHTML = "Welcome " + loggedInUser;
        document.getElementById("logout").innerHTML = '<a onclick="removeCookies()" href="index.html"> Click here to log-out.</a>'

        let ajax = new XMLHttpRequest();
    
        ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            let colours = JSON.parse(this.responseText);
            
            for (i = 0; i < colours.data.length; i++) {
                      
                document.getElementById("colours").innerHTML += "<h3> <h2> Colour Name: </h2>" + colours.data[i].name + "</h3>";
                
                document.getElementById("colours").innerHTML += "<h3> <h2> Year named: </h2>" + colours.data[i].year + "</h3>";

                document.getElementById("colours").innerHTML += "<h3> <h2> Color Code: </h2>" + colours.data[i].color + "</h3> <br> <h2> Color: </h2>";
                
                let colourCodes = document.createElement("div");
                let parentElement = document.getElementById ("colours");
                parentElement.append(colourCodes);
        
                colourCodes.style.width = "100px";
                colourCodes.style.height = "100px";
                colourCodes.style.backgroundColor = colours.data[i].color;
                colourCodes.style.margin = "auto";
                
             
              
        }

        
    }
        
    }
    
    ajax.open("GET", "https://reqres.in/api/unknown", true);
    ajax.send();
    





}
   
