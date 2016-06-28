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
            document.getElementById("checklistDiseases").innerHTML += obj[i].value + " ";
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
        "Diabetes":10,
        "Heart Disease":20,
        "HIV/AIDS":15,
        "Arthritis":5,
        "Asthma":5,
        "Depression":8
    };
    var diseaseScore = 0;
    var obj = document.getElementsByName("diseases");
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            diseaseScore += diseaseDic[obj[i].value];
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
    getDiseases();
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

