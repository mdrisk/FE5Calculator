

$(document).ready(function(){
  var total=0;
  var current = "";
  values = [];
  memory = [];

  function numCheck(){
    num = values[0];
    var length = (num + '').replace('.', '').length;
    if(length > 9){
      $("#display").text("Error");
      values = [];
      current = "";
      memory = [];
      total = 0;
    }
  }
  function compute(){
    if(values[1] == "+"){
      console.log(values);
      total = (values[0] + values[2]);
      console.log(total);
      total = parseFloat(total.toFixed(9))
      console.log(total);
      $("#display").text(total);
      memory.push("+");
      memory.push(values[2]);
      values = [];
      values.push(total);
      current = "";
      numCheck();
    }
    else if(values[1] == "-"){
      total = (values[0] - values[2]);
      console.log(total);
      total = parseFloat(total.toFixed(9))
      $("#display").text(total);
      memory.push("-");
      memory.push(values[2]);
      values = [];
      values.push(total);

      current = "";
      numCheck();
    }
    else if(values[1] == "x"){
      total = (values[0] * values[2]);
      console.log(total);
      total = parseFloat(total.toFixed(9))
      $("#display").text(total);
      memory.push("x");
      memory.push(values[2]);
      values = [];
      values.push(total);

      current = "";
      numCheck();
    }
    else if(values[1] == "/"){
      total = (values[0] / values[2]);
      console.log(total);
      total = parseFloat(total.toFixed(9))
      $("#display").text(total);
      memory.push("/");
      memory.push(values[2]);
      values = [];
      values.push(total);

      current = "";
      numCheck();
    }
  }



  $(document).click(function(event) {
    text = "";
    var text = $(event.target).text().trim();



    if(/([^0-9.])/.test(text)){

     if(text == "AC"){
       console.log("pressed AC ")
       values = [];
       total = 0;
       current = "";
       $("#display").text(total);
     }
      if(text == "x2"){
       if(current != ""){
        console.log("pressed x2, current != ''");
        values = [];
        values.push(current);
        total = values[0]**2;
       }else{
        console.log("pressed x2, current == ''");
        console.log(values);
        total = values[0]**2;
       }
       console.log("total:"+total);
       values = [];
       values.push(total);
       console.log(values);
       current = "";
       $("#display").text(total);
       numCheck();
     }
     else if(text == "CE"){
       if(current != "")
         values.push(current);
       console.log("spot 1:" + values);
       values.pop();
       console.log("spot 2 : "+values);
       if(values.length>=1){
       $("#display").text(values[values.length-1])
       } else{
       $("#display").text("0");
       }
       current = "";
       text = "";
     }
     else if(text != "="){
       if(current.length > 0)
         current = parseFloat(current);
       if(current != "")
         values.push(current);
       if(Number(parseFloat(values[values.length-1])) === values[values.length-1]){
       console.log("pressed +-x/. ");
       console.log(values);
       if(values.length>2){
           if(text == "÷")
            text = "/";
          compute(values);
          values.push(text);
          //console.log(values);
       } else {
         $("#display").text(text);
         if(text == "÷")
            text = "/";
         values.push(text);
         current = "";
       }
       } else
         console.log("error");
     }

     else if(text == "="){
       if(current.length > 0)
         current = parseFloat(current);
       if(current == "" && memory.length > 1){
         values.push(memory[0]);
         values.push(memory[1]);
       } else {
       console.log("pressed = ")
       values.push(current); }
       compute(values);
       current = "";

     }
   } else {
     if(text == "."){
       if(current == "" ){
         current += "."
         console.log(current);
       } else {
       console.log("pressed . ")
       current += "."
       //current = parseFloat(current);
       console.log(current);
       }

      } else{
     current += text;
     console.log(current);
     $("#display").text(current);
      }
   }
  });
});
