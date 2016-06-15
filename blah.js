

var nextQuestion = function () {
    var h4 = document.createElement("h4");
    h4.id = "question1";
    h4.innerHTML = "Question 1 - Enter Name";
    var br = document.createElement("br");
    document.getElementById("questionContainer").appendChild(h4);
    document.getElementById("questionContainer").appendChild(br);
    var input = document.createElement("input");
    input.type="text";
    input.className = "form-control";
    input.id = "nameInput";
    input.placeholder="Please enter name";
    document.getElementById("questionContainer").appendChild(input);

    var button = document.createElement("button");
    button.onclick="getName()";
    button.id = "question1button";
    document.getElementById("questionContainer").appendChild(button);

    var a = document.createElement("a");
    a.href="#question2";
    a.innerHTML = "Submit!";
    document.getElementById("question1button").appendChild(a);
    document.getElementById("questionContainer").appendChild(br);

}

