
var question = [
    {
        question: " How can we describe an array in the best possible way?",

        Option:{
            a: "The Array shows a hierarchical structure.",
            b: "Arrays are immutable.",
            c: "Container that stores the elements of similar types",
            d: "The Array is not a data structure"
        },

        answer : "c"
    },

    {
        question: "Which of the following is the correct way of declaring an array?",

        Option:{
            a: "int javatpoint[10];",
            b: "int javapoint;",
            c: "java point{20};",
            d: "array javapoint[10];"
        },

        answer : "a"
    },

    {
        question: "How can we initialize an array in C language?",

        Option:{
            a: "int a[2] = (10,90);",
            b: "int arr(2) = {10, 20}",
            c: "int arr[2] = {10, 20)}",
            d: "int arr(2) = (10, 20)"
        },

        answer : "c"
    },

    {
        question: "Which one of the following is the process of inserting an element in the stack?",

        Option:{
            a: "insert",
            b: "add",
            c: "push",
            d: "none of above"
        },

        answer : "c"
    },

    {
        question: "Which one of the following is the size of int arr[9] assuming that int is of 4 bytes?",

        Option:{
            a: "9",
            b: "36",
            c: "35",
            d: "10"
        },

        answer : "b"
    },   
]

function start(){
    document.getElementById("main").style.display = "none";
    document.getElementById("start").style.display = "block";
    
    quiz();
}

var no = 0;
var mark = 0;

function quiz(){

    document.getElementById("notify").innerHTML = "";

    var q =  "<div >" + question[no].question + "</div>";

    var a = "<input type = 'radio' id = 'a' value = 'a' name='option' > <label for='a'>" + question[no].Option.a + "</label><br>";
    var b = "<input type = 'radio' id = 'b' value = 'b' name='option'> <label for='b'>" + question[no].Option.b + "</label><br>";
    var c = "<input type = 'radio' id = 'c' value = 'c' name='option'> <label for='c'>" + question[no].Option.c + "</label><br>";
    var d = "<input type = 'radio' id = 'd' value = 'd' name='option'> <label for='d'>" + question[no].Option.d + "</label><br>";

    
    
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
        if(no < 5){
            quiz();
        }

        else {
            document.getElementById("start").innerText = "";
            var obtained = "<h1 style='text-align: center;color:black'> Marks: " + mark + " out of 5 <h1>";
            var restart = "<a href='quiz.html'><button style='text-align: center;border:0px;color:black'>RESTART</button></a>"
            document.getElementById("notify").innerHTML = obtained + restart;
        }
    }
   
}