var getName = function () {
    var userName = document.getElementById("nameInput").value;
    document.getElementById("nameInput").value = "Thanks for your input!";
};


var getAge = function () {
    var obj = document.getElementById("ageRange");
    document.getElementById("printAgeRange").innerHTML = "Your age range is: " + obj.options[obj.selectedIndex].text;
};

var getGender = function () {
    if (document.getElementById("Male").checked) {
        document.getElementById("printGender").innerHTML = "You selected male";
    } else if (document.getElementById("Female").checked) {
        document.getElementById("printGender").innerHTML = "You selected female";
    }
};

var getDiseases = function () {
    var obj = document.getElementsByName("diseases");
    document.getElementById("checklistDiseases").innerHTML = "You have the following diseases: ";
    for( var i = 0; i<obj.length; i++) {
        if (obj[i].checked) {
            console.log(obj[i].id);
            document.getElementById("checklistDiseases").innerHTML += obj[i].id + " ";
        }
    }
};

var checkDiseaseText = function () {
    var userInput = document.getElementById("textInput").value;
    userInput = userInput.split(",");
    if (userInput.length > 0 && userInput[0] !== "") {
        document.getElementById("userDiseases").innerHTML = "You have told us the following diseases: ";
        for(var i = 0; i < userInput.length; i++) {
            document.getElementById("userDiseases").innerHTML += userInput[i] + " ";
        }
    } else {
        document.getElementById("userDiseases").innerHTML = "You have not told us any diseases!";
    }

};

var getAgeRangeScore = function () {
    var scoresDic = {
        "18-25":10,
        "25-50":1,
        "50-70":20,
        "70+":100
    };
    var obj = document.getElementById("ageRange");
    return scoresDic[obj.options[obj.selectedIndex].text];
};

var getDiseaseListScore = function () {
    var diseaseDic = {
        "diabetes":10,
        "heartDisease":20,
        "HIV":15,
        "arthritis":5,
        "asthma":5,
        "depression":8
    };
    var diseaseScore = 0;
    var obj = document.getElementsByName("diseases");
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            diseaseScore += diseaseDic[obj[i].id];
        }
    }
    return diseaseScore;
};

var getDiseaseFreeTextScore = function () {
    var userInput = document.getElementById("textInput").value;
    userInput = userInput.split(",");
    return (userInput.length*10);
};


var calcScore = function () {
    var ageScore = getAgeRangeScore();
    var diseaseScore = getDiseaseListScore();
    var diseaseFreeTextScore = getDiseaseFreeTextScore();
    var finalScore = ageScore + diseaseScore + diseaseFreeTextScore;
    document.getElementById("printScore").innerHTML = "Your score is: " + finalScore +"!";
    if (finalScore > 60) {
        document.getElementById("printScore").innerHTML += " Unfortunately we cannot insure you.";
    } else {
        document.getElementById("printScore").innerHTML += " Congratulations, we can insure you.";
    }
};



var calcCheckBoxScore = function () {
    var blah = document.getElementsByName("diseases");
    for (var i = 0; i < blah.length; i++) {
        if (blah[i].checked) {
            console.log(blah[i].value);
        }
    }
};

var nextQuestion = function () {
    var h4 = document.createElement("h4");
    h4.id = "question1";
    h4.innerHTML = "Question 1 - Enter Name";
    var br = document.createElement("br");
    document.getElementById("questionContainer").appendChild(h4);
    document.getElementById("questionContainer").appendChild(br);
    var input = document.createElement("input");
    input.type = "text";
    input.className = "form-control";
    input.id = "nameInput";
    input.placeholder = "Please enter name";
    document.getElementById("questionContainer").appendChild(input);

    var button = document.createElement("button");
    button.onclick = "getDiseases()";
    button.id = "question1button";
    button.onclick = "getDiseases()";
    document.getElementById("questionContainer").appendChild(button);

    var a = document.createElement("a");
    a.href = "#question2";
    a.innerHTML = "Submit!";
    document.getElementById("question1button").appendChild(a);
    document.getElementById("questionContainer").appendChild(br);

};

