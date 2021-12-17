var question;
var total;
fetch("data.json")
.then(res => res.json())
.then(data => {question = data;
            total = question.length;
})

function start(){
    
    document.getElementById("main").style.display = "none";
    document.getElementById("start").style.display = "block";
    
    quiz();
}

var no = 0;
var mark = 0;


function quiz(){

    document.getElementById("notify").innerHTML = "";

    var q =  `<h3> ${no+1}. ${question[no].question}. </h3>`;

    var a = "<input class='option' type = 'radio' id = 'a' value = 'a' name='option' > <label for='a' class='option'>" + question[no].Option.a + "</label><br>";
    var b = "<input class='option' type = 'radio' id = 'b' value = 'b' name='option'> <label for='b' class='option'>" + question[no].Option.b + "</label><br>";
    var c = "<input class='option' type = 'radio' id = 'c' value = 'c' name='option'> <label for='c' class='option'>" + question[no].Option.c + "</label><br>";
    var d = "<input class='option' type = 'radio' id = 'd' value = 'd' name='option'> <label for='d' class='option'>" + question[no].Option.d + "</label><br>";

    
    
    document.getElementById("question").innerHTML = q + a + b + c + d;
    
}

function check(){
    
    var ans = document.querySelector('input[name="option"]:checked')
    
    
    if(ans === null){
        console.log(ans);
        document.getElementById("notify").innerText = "please select an opion";
    }
    
    else{
       
        if(ans.value === question[no].answer){
            mark++;
        }

        no++;
        if(no < total){
            quiz();
        }

        else {
            document.getElementById("start").innerText = "";
            var obtained = "<h1 style='text-align: center;color:black'> Marks: " + mark + " out of "+ total + "<h1>";
            var restart = "<a href='quiz.html'><button style='text-align: center;border:0px;color:black'>RESTART</button></a>"
            document.getElementById("notify").innerHTML = obtained + restart;
        }
    }
   
}