
var text1 = 'Hello There!';
var text2 = 'I am Zuriel Gonzalez, Computer Science major and currently attending Union College.';
var text3 = 'Get to know a little bit about my coding skills and past projects I have worked on.';

function typeWriter(text){
  var speed = 50;
  var i = 0;
  var headertext = document.querySelector("#headerText");
  headertext.innerHTML = "";

  function writer(){
    if(i < text.length){
      headertext.innerHTML += text1.charAt(i);
      i++;
      setTimeout(writer, speed);
    }


  }
  writer();
}


function typeWriterP() {
  var p = document.getElementById("typeWriter");
  var speed = 22;
  var i = 0;

  function writeText2() {
    if (i < text2.length) {
      p.innerHTML += text2.charAt(i);
      i++;
      setTimeout(writeText2, speed);
    } else {
      // after text2 is typed, add start text3
      p.innerHTML += "<p></p>";
      i = 0;
      writeText3();
    }
  }

  function writeText3() {
    if (i < text3.length) {
      p.innerHTML += text3.charAt(i);
      i++;
      setTimeout(writeText3, speed);
    }
  }

  writeText2();
}



window.onload = () => {
  typeWriter(text1);
  typeWriterP();
};
