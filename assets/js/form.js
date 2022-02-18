function validation(){
    console.log("haii")
var a=0
let fname=$("#fname").val().trim()
let email=$("#email").val().trim()
let number=$("#number").val().trim()
let message=$("#message").val()

var regexName=/(^[a-zA-Z][a-zA-Z\s]{3,20}[a-zA-Z]$)/;
var regexEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var regexNumber=/^\d{10}$/;

nameValid();
emailValid();
numberValid()

function nameValid(){
    if(fname==""){
        
        $('#error-1').show();
        $('#error-1').text("This field is required")
        
    }else if(!regexName.test(fname)){
        $('#error-1').text("Only alphabets are allowed")
        $('#error-1').show()
    }else{
        $('#error-1').hide()
        a=1
    }
}


function emailValid(){
    
    if(email == ""){
        
        $("#error-2").show()
        $("#error-2").text("This Field is requierd")
        
        
    }else if(!regexEmail.test(email)){
        $("#error-2").show()
        $("#error-2").text("Enter a Valid email")
       
        
    }else{
        $("#error-2").hide()
        a+=1
    }
}

function numberValid(){
    if(number == ""){
        $("#error-3").show()
        $("#error-3").text("This Field is requierd")
       
        
    }else if(!regexNumber.test(number)){
        $("#error-3").show()
        $("#error-3").text("Only Number Are allowed")
        
       
    }else{
        $("#error-3").hide()
        a+=1
    }
}
if(a==3){
    return true
}else{
    return false
}

}

//submittion
$("#form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxPDwY2kMqhkS88I9anvcEvlh5Nzd9eyBWBQSw0ZmdVv7Qv7h527C_9lqegFDXh4aVa/exec",
        data:$("#form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})


