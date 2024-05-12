window.onload = function() {
    document.getElementById("biggerBtn").onclick = function() {
        document.getElementById("textInput").style.fontSize = "24pt";
    };

    document.getElementById("mooBtn").onclick = function() {
        let textArea = document.getElementById("textInput");
        let text = textArea.value;
        text = text.replace(/(\w+)\./g, "$1-Moo.");
        textArea.value = text.toUpperCase();
    };
};

function styleText() {
    let textInput = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}
