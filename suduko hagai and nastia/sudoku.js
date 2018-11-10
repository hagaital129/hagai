
$(document).ready(function(){


    $("#login").click(function(){
        $("#loginbuttons").show();
    });
   
    $("#signupbutton").click(function(){
        $("#innerdiv").hide();
        $(".headers").hide();    
        $("#loginbuttons").hide();    
        $("#signup").show();
    });
    
    $("#cancelbutton1").click(function(){
        $("#loginpage").hide();
        $(".headers").show();
        $("#innerdiv").show();    
        $("#loginbuttons").show();
    });

    $("#existinguser").click(function(){
        $("#loginbuttons").hide();
        $(".headers").hide(); 
        $("#innerdiv").hide();  
        $("#loginpage").show();     
        });

    $("#cancelbutton2").click(function(){
        $("#signup").hide();
        $(".headers").show();
        $("#innerdiv").show();    
        $("#loginbuttons").show(); 
    });
   
    var existinguser={
        userName:"hagaital@gmail.com",
        pass:"admin",
    }; 
 
    $("#signupbtn").click(function(){
        // firstName = document.getElementById('firstname').value;
        // lastname = document.getElementById('lastname').value;
        // username = document.getElementById('username').value;
        // pass = document.getElementById('pass').value;
        // passrepeat = document.getElementById('passrepeat').value;
        // if(pass!=passrepeat){
        //     alert("Repeat password must match password");
        // }
        // // else{
            window.location.replace("http://stackoverflow.com");
      
    });

});