function SwitchPrompt() {
    let a = prompt("a?", "placeholder");
    switch (a)
    {
        case "0" :
            alert("0");
            break;
        case "1" :
            alert("1");
            break;
        case ("2" || "3") :
            alert("2, 3");
            break;
    }
}