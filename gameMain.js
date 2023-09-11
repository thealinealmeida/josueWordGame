const p1Name = localStorage.getItem("p1Name");
const p2Name = localStorage.getItem("p2Name");

let p1Score = 0;
let p2Score = 0;

let questionCount = 0;
let word;

writeScore();
writeQA();

function writeScore() {
    document.getElementById("p1Name").innerHTML = p1Name + ":";
    document.getElementById("p2Name").innerHTML = p2Name + ":";
}

function writeQA() {
    let question, answer;
    if (questionCount % 2 == 0) {
        question = p1Name;
        answer = p2Name;
    } else {
        question = p2Name; // Corrigido para p2Name
        answer = p1Name; // Corrigido para p1Name
    }
    document.getElementById("playerQuestion").innerHTML = "Turno de pergunta: " + question;
    document.getElementById("playerAnswer").innerHTML = "Turno de resposta: " + answer;
}

function replaceAt(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + 1);
}

function check() {
    const userAnswer = document.getElementById("answer").value.toLowerCase(); // Obtém a resposta do usuário em letras minúsculas

    // Substitua esta lógica pela lógica real do seu jogo
    const correctAnswer = "resposta_correta"; // Substitua com a resposta correta
    if (userAnswer === correctAnswer) {
        // Resposta correta
        alert("Resposta correta!");
        // Atualize a pontuação aqui, se necessário
    } else {
        // Resposta incorreta
        alert("Resposta incorreta. Tente novamente.");
    }
    // Limpe o campo de resposta
    document.getElementById("answer").value = "";
}


function send() {
    word = document.getElementById("word").value; // Corrigido para "value"
    word = word.toLowerCase();
    console.log("Palavra: " + word);
    let wordReplace = word;

    const wordLength = word.length;
    console.log("Length: " + wordLength);

    if (wordLength >= 5) {
        const charIndex = new Set();
        while (charIndex.size < 3) {
            const randomIndex = Math.floor(Math.random() * wordLength); // Corrigido para "randomIndex"
            charIndex.add(randomIndex); // Corrigido para "randomIndex"
        }
        console.log(charIndex);

        for (const index of charIndex.values()) {
            console.log("Index: " + index);
            const char = word[index];
            console.log("Char: " + char);
            wordReplace = replaceAt(wordReplace, index, "_"); // Certifique-se de definir a função "replaceAt"
            console.log(wordReplace);
        }

        const wordDisplay = "<h4 class='display-4'>" + wordReplace + "</h4>"; // Corrigido
        const inputAnswer = "<label class='col-form-label'>Resposta: </label>" +
            "<input id='answer' type='text' class='form-control' placeholder='resposta'>";
        const button = "<button onclick='check()' class='btn btn-warning col-6 mx-auto'>Checar</button>"; // Certifique-se de definir a função "check"
        const outputHtml = wordDisplay + inputAnswer + button;

        document.getElementById("output").innerHTML = outputHtml;

        document.getElementById("input").style.display = "none";
        document.getElementById("enviar").style.display = "none";
    }
}
