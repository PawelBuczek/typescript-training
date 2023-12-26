let sports: string[] = ["Golf", "Running", "Tennis", "Swimming"];

sports.push("Baseball");
sports.push("Football");

for (let sport of sports) {
    if (sport == "Tennis") {
        console.log(sport + "  << Favourite")
    } else {
        console.log(sport);
    }
}