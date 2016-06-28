var jsonText = [
    {
        "id": "question1", "title": "This is Question 1", "type": "checkbox", "outputFunc": function(){getDiseases()}, "outputID":"checklistDiseases" ,"options": [
        {
            "name": "diseases",
            "value": 1,
            "title": "Diabetes"
        },

        {
            "name": "diseases",
            "value": 2,
            "title": "Heart Disease"
        },

        {
            "name": "diseases",
            "value": 3,
            "title": "HIV/AIDS"
        },

        {
            "name": "diseases",
            "value": 4,
            "title": "Arthritis"
        },

        {
            "name": "diseases",
            "value": 5,
            "title": "Asthma"
        },

        {
            "name": "diseases",
            "value": 6,
            "title": "Depression"
        }
    ]
    },

    {
        "id": "question2",
        "title": "This is Question 2",
        "type": "textarea",
        "outputFunc": function(){checkDiseaseText()},
        "options": [],
        "userInputID": "userDiseasesFreeText",
        "label inner text": "Any other diseases? (separate with commas)",
        "placeholder": "Input diseases here",
        "outputID": "userDiseases"
    },

    {
        "id": "question3",
        "title": "This is Question 3",
        "type": "select",
        "outputFunc": function(){getAge()},
        "options": [
            {
                "name": "ageChoice",
                "value": 1,
                "title": "18-25"
            },
            {
                "name": "ageChoice",
                "value": 2,
                "title": "25-50"
            },
            {
                "name": "ageChoice",
                "value": 3,
                "title": "50-70"
            },
            {
                "name": "ageChoice",
                "value": 4,
                "title": "70+"
            }
        ],
        "userInputID": "ageRange",
        "label inner text": "",
        "placeholder": "",
        "onclick": "getAge",
        "outputID": "printAgeRange"
    },
    {
        "id": "question4",
        "title": "This is Question 4",
        "type": "text",
        "outputFunc": function(){getName()},
        "options": [],
        "userInputID": "nameInput",
        "label inner text": "",
        "placeholder": "Please enter name",

        "outputID": ""
    },
    {
        "id": "question5",
        "title": "This is Question 5",
        "type": "radio",
        "outputFunc": function(){getGender()},
        "options": [
            {
                "name":"gender",
                "value":"0",
                "title":"Male"
            },
            {
                "name":"gender",
                "value":"1",
                "title":"Female"
            }
        ],
        "userInputID": "",
        "label inner text": "",
        "placeholder": "",
        "outputID": "printGender"
    }
];

var renderQuestions = function () {
    var questionContainer = document.getElementById("questionContainer");
    var questionGeneratorButton = document.getElementById("questionGenerator");
    questionContainer.removeChild(questionGeneratorButton);
    var whiteSpaceLeftDiv = document.createElement("div");
    whiteSpaceLeftDiv.className = "col-lg-3 col-md-2 col-sm-1";
    questionContainer.appendChild(whiteSpaceLeftDiv);
    var questionsDiv = document.createElement("div");
    questionsDiv.className = "col-lg-6 col-md-8 col-sm-10";
    questionContainer.appendChild(questionsDiv);
    for (var i = 0; i < jsonText.length; i++) {
        var header = printQuestionHeading(jsonText[i]);
        var question;
        if (jsonText[i]["type"] === "checkbox") {
            question = renderCheckbox(jsonText[i]);
        } else if (jsonText[i]["type"] === "textarea") {
            question = renderTextarea(jsonText[i]);
        } else if (jsonText[i]["type"] === "select") {
            question = renderSelectionDropdown(jsonText[i]);
        } else if (jsonText[i]["type"] === "text") {
            question = renderTextQuestion(jsonText[i]);
        } else if (jsonText[i]["type"] === "radio") {
            question = renderRadioQuestion(jsonText[i]);
        }
        questionsDiv.appendChild(header);
        questionsDiv.appendChild(question);
        question.appendChild(createSubmitButton(jsonText[i]["outputFunc"]));
    }
    var whiteSpaceRightDiv = document.createElement("div");
    whiteSpaceRightDiv.className = "col-lg-3 col-md-2 col-sm-1";
    questionContainer.appendChild(whiteSpaceRightDiv);
};

var printQuestionHeading = function (questionObj) {
    var header = document.createElement("h4");
    header.id = questionObj["id"];
    header.innerHTML = questionObj["title"];
    var br = document.createElement("br");
    header.appendChild(br);
    return header;
};

var renderTextQuestion = function (questionObj) {
    var div = document.createElement("div");
    var questionLabel = document.createElement("label");
    questionLabel.for = questionObj["userInputID"];
    var userTextInput = document.createElement("input");
    userTextInput.className = "form-control";
    userTextInput.type = questionObj["type"];
    userTextInput.id = questionObj["userInputID"];
    userTextInput.placeholder = questionObj["placeholder"];
    questionLabel.appendChild(userTextInput);
    div.appendChild(questionLabel);
    var outputForUser = document.createElement("p");
    outputForUser.id = questionObj["outputID"];
    div.appendChild(outputForUser);
    return div;
};

var renderSelectionDropdown = function (questionObj) {
    var div = document.createElement("div");
    var selections = document.createElement("select");
    selections.id = questionObj["userInputID"];
    for (var i = 0; i < questionObj["options"].length; i++) {
        var userOption = document.createElement("option");
        userOption.name = questionObj["options"][i]["name"];
        userOption.value = questionObj["options"][i]["value"];
        userOption.title = questionObj["options"][i]["title"];
        userOption.innerHTML = questionObj["options"][i]["title"];
        selections.appendChild(userOption);
    }
    var br = document.createElement("br");
    div.appendChild(selections);
    div.appendChild(br);
    var outputForUser = document.createElement("p");
    outputForUser.id = questionObj["outputID"];
    div.appendChild(outputForUser);
    return div;
};

var renderCheckbox = function (questionObj) {
    var div = document.createElement("div");
    div.className = "checkbox";
    for (var i = 0; i < questionObj["options"].length; i++) {
        var labelForOption = document.createElement("label");
        var userOption = document.createElement("input");
        userOption.type = questionObj["type"];
        userOption.name = questionObj["options"][i]["name"];
        userOption.value = questionObj["options"][i]["value"];
        userOption.title = questionObj["options"][i]["title"];
        var labelText = document.createTextNode(questionObj["options"][i]["title"]);
        labelForOption.appendChild(userOption);
        labelForOption.appendChild(labelText);
        div.appendChild(labelForOption);
        div.appendChild(createSimpleBR());
    }
    var br = document.createElement("br");
    div.appendChild(br);
    var outputForUser = document.createElement("p");
    outputForUser.id = questionObj["outputID"];
    div.appendChild(outputForUser);
    return div;
};

var renderRadioQuestion = function (questionObj) {
    var radioContainer = document.createElement("div");
    for (var i = 0; i < questionObj["options"].length; i++) {
        var div = document.createElement("div");
        div.className = "radio";
        var labelForOption = document.createElement("label");
        var userOption = document.createElement("input");
        userOption.type = questionObj["type"];
        userOption.name = questionObj["options"][i]["name"];
        userOption.value = questionObj["options"][i]["value"];
        userOption.title = questionObj["options"][i]["title"];
        var labelText = document.createTextNode(questionObj["options"][i]["title"]);
        labelForOption.appendChild(userOption);
        labelForOption.appendChild(labelText);
        div.appendChild(labelForOption);
        radioContainer.appendChild(div);
    }
    var outputForUser = document.createElement("p");
    outputForUser.id = questionObj["outputID"];
    radioContainer.appendChild(outputForUser);
    return radioContainer;
};

var renderTextarea = function (questionObj) {
    var div = document.createElement("div");
    var questionLabel = document.createElement("label");
    questionLabel.for = questionObj["userInputID"];
    questionLabel.innerHTML = questionObj["label inner text"];
    questionLabel.appendChild(createSimpleBR());
    var userTextInput = document.createElement("textarea");
    userTextInput.className = "form-control";
    userTextInput.rows = "4";
    userTextInput.cols = "50";
    userTextInput.id = questionObj["userInputID"];
    userTextInput.placeholder = questionObj["placeholder"];
    div.appendChild(questionLabel);
    div.appendChild(userTextInput);
    var outputForUser = document.createElement("p");
    outputForUser.id = questionObj["outputID"];
    div.appendChild(outputForUser);
    return div;
};

var getDiseases = function () {
    var obj = document.getElementsByName("diseases");
    document.getElementById("checklistDiseases").innerHTML = "You have the following diseases: ";
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            document.getElementById("checklistDiseases").innerHTML += obj[i].title + " ";
        }
    }
};

var getName = function () {
    document.getElementById("nameInput").value = "Thanks for your input!";
};

var getAge = function () {
    var obj = document.getElementById("ageRange");
    document.getElementById("printAgeRange").innerHTML = "Your age range is: " + obj.options[obj.selectedIndex].text;
};

var checkDiseaseText = function () {
    var userInput = document.getElementById("userDiseasesFreeText").value;
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

var createSubmitButton = function (onclickFunc) {
    var submitButton = document.createElement("button");
    submitButton.onclick = onclickFunc;
    submitButton.innerHTML = "Submit!";
    return submitButton;
};

var createSimpleBR = function () {
    var br = document.createElement("br");
    return br;
};

var getGender = function () {
    var options = document.getElementsByName("gender");
    for(var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            document.getElementById("printGender").innerHTML = "You selected " + options[i].title;
        }
    }
    return null;
};