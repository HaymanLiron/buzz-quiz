var getAge = function () {
    var obj = document.getElementById("ageRange");
    document.getElementById("printAgeRange").innerHTML = "Your age range is: " + obj.options[obj.selectedIndex].text;
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


