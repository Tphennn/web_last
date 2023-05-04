function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    
    if (email === "admin" && password === "admin") {
        window.location.replace("index.html");
        return false;
      
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }
