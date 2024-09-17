function playGame(abigailChoice, huseinChoice) {
    abigailChoice = abigailChoice.toLowerCase();
    huseinChoice = huseinChoice.toLowerCase();
    const validChoices = ["rock", "paper", "scissors"];
    if (!validChoices.includes(abigailChoice) || !validChoices.includes(huseinChoice)) {
        return "Pilihan tidak valid. Pilih antara Rock, Paper, atau Scissors.";
    }
    if (abigailChoice === huseinChoice) {
        return "Seri! Abigail dan Husein memilih " + abigailChoice;
    }
    if (
        (abigailChoice === "rock" && huseinChoice === "scissors") ||
        (abigailChoice === "scissors" && huseinChoice === "paper") ||
        (abigailChoice === "paper" && huseinChoice === "rock")
    ) {
        return "Abigail menang! Abigail memilih " + abigailChoice + " dan Husein memilih " + huseinChoice;
    } else {
        return "Husein menang! Abigail memilih " + abigailChoice + " dan Husein memilih " + huseinChoice;
    }
}
// let abigail = prompt("Abigail :");
// let husein = prompt("Husein :");

console.log(playGame(paper, rock));
