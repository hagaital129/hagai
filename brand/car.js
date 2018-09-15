{
    var carSearch =
    {
        brand: "",
        type: "",
        cc: 0,
        color: "",
        numOfSits: 0,
    };
    function brand(){
        var brand1 = document.getElementById("brand").value;
        if(brand1.length<2){alert("please enter at least 2 letters")}
        else {carSearch.brand = brand1}
    function type(){
        var type1 = document.getElementById("type").value;
        if(type1.length<2){alert("please enter at least 2 letters")}
        else {carSearch.type = type1}
    function cc(){
        var cc1 = phraseInt(document.getElementById("cc").value);
        if(cc1<800 || cc1>6000){alert("please enter CC between 800-6000")}
        else {carSearch.cc = cc1}}
    function seats(){
        var seats1 = phraseInt(document.getElementById("seats").value);
        carSearch.numOfSits = seats1;
    }
}}
    function submit(){
        document.getElementById("result").innerHTML=
        carSearch.brand + carSearch.type + carSearch.cc
         + carSearch.color + carSearch.numOfSits;}
    }
      
 /*   function carDetails(){
        var brand1 = document.getElementById("brand").value;
        var type1 = document.getElementById("type").value;
        var cc1 = phraseInt(document.getElementById("cc").value);
        var seats1 = phraseInt(document.getElementById("seats").value);
        

 /*       if(brand1.length<2){alert("please enter at least 2 letters")}
        else {
            if(type1.length<2){alert("please enter at least 2 letters")}
        else {
            if(cc1<800 || cc1>6000){alert("please enter CC between 800-6000")}
        else {
                    
            carSearch.brand = brand1;
            carSearch.type = type1;
            carSearch.cc = cc1;
            carSearch.seats = seats1;
        
        }
    }
}
}*/
/*    function color(color){
        carSearch.color = color;
}
        function submit(){
        
         alert();    
        }*/
