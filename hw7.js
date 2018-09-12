{
    function plus(){
        var num1=parseInt(document.getElementById("num1").value);
        if(num1<0){
            document.getElementById("result").innerHTML="Negative";}
        else{document.getElementById("result").innerHTML="Positive";}
        }
        function Even(){
            var num2=parseInt(document.getElementById("num2").value);
            if(num2 % 2 == 0){
                document.getElementById("result1").innerHTML="even";}
            else{document.getElementById("result1").innerHTML="Odd";}
            }
            function string1(){
                
                str= document.getElementById("letter1").value
                
                if (str.length == 1) {
                    if (str == str.toUpperCase())
                    {document.getElementById("result2").innerHTML="UpperCase";}
                    if (str == str.toLowerCase())
                    {document.getElementById("result2").innerHTML="LowerCase";}   
                }
                else {document.getElementById("result2").innerHTML="To much";}
            }
            function string2(){
                
                str1= document.getElementById("string1").value
                str2= document.getElementById("string2").value
                var diff = str1.length - str2.length;
                if (diff < 0) {diff = str2.length - str1.length}
                
                if (str1.length > str2.length)
                    {var print1 = str1.slice(0, str1.length - diff);
                    document.getElementById("result3").innerHTML="Field one is the longest." + " letter diff " + diff + " " + print1;}
                    else{var print2 = str2.slice(0, str2.length - diff);
                    document.getElementById("result3").innerHTML="Field two is the longest." + " letter diff " + diff + " " + print2;}

            }
            function palindrome(){
                
                var num1=parseInt(document.getElementById("num11").value);
                var num2=parseInt(document.getElementById("num22").value);
                var num3=parseInt(document.getElementById("num33").value);
                var num4=parseInt(document.getElementById("num44").value);
                
                if (num1 == num4 && num2 == num3)
                {document.getElementById("result4").innerHTML= "Is palindrome"}
                else{document.getElementById("result4").innerHTML= "Not palindrome" }
            }
            
        }
