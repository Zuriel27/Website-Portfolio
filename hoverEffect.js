
var boxSkills = document.querySelectorAll(".skills");
var logo = document.querySelectorAll(".footerLogo");
var navigation = document.querySelectorAll(".navigation");
var projectTitle = document.querySelectorAll(".accordion");
var buttonMessage = document.querySelectorAll(".contact-Form button");
var resumeButton = document.querySelectorAll("#resumeButton");

for(var i = 0; i < boxSkills.length; i++){
    boxSkills[i].addEventListener("mouseover", function(){
        this.style.height = '3.2em';
        this.style.width = '8.2em';
        this.style.transition = "0.25s";
    
    })

    boxSkills[i].addEventListener('mouseout', function(){
        this.style.height = '2.6em';
        this.style.width = '7.2em';
    })
}


for(var f = 0; f < logo.length; f++){
    logo[f].addEventListener("mouseover", function(){
        this.style.height = '2.9em';
    })

    logo[f].addEventListener("mouseout", function(){
        this.style.height = "2.5em"
    })
}


for(var n = 0; n < navigation.length; n++){
    navigation[n].addEventListener("mouseover",function(){
        this.style.textDecoration = "underline"
        this.style.textDecorationThickness = "2px"
        this.style.fontSize = "1.2em"
    })

    navigation[n].addEventListener("mouseout", function(){
        this.style.textDecoration = "none"
        this.style.fontSize = "1em"
    })
}


for(var t = 0; t < projectTitle.length; t++){
    projectTitle[t].addEventListener("mouseover", function(){
        this.style.fontSize = "20px";
    })

    projectTitle[t].addEventListener("mouseout", function(){
        this.style.fontSize = "15px";
    })
}

for(var b = 0; b < buttonMessage.length; b++){
    buttonMessage[b].addEventListener("mouseover", function(){
        this.style.height = "2.3em";
        this.style.width = "5.3em"
        this.style.fontSize = "16px";
    })
    
    buttonMessage[b].addEventListener("mouseout", function(){
        this.style.height = "2em";
        this.style.width = "5em";
        this.style.fontSize = "14px";
    })
}


for(var j = 0; j < resumeButton.length; j++){
    resumeButton[j].addEventListener('mouseover',function(){
        this.style.backgroundColor = "#8b0000";
        this.style.boxShadow = "0px 0px 10px rgba(139, 0, 0, 0.5)";

    })

    resumeButton[j].addEventListener('mouseout', function(){
        this.style.backgroundColor = "";
        this.style.boxShadow = "none";

    })
}