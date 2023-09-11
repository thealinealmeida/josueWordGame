function addUsers() {
    const p1Name = document.getElementById("p1NameInput").value;
    console.log(p1Name);

    const p2Name = document.getElementById("p2NameInput").value;
    console.log(p2Name);

    localStorage.setItem("p1Name", p1Name);
    localStorage.setItem("p2Name", p2Name);

    window.location = "game.html"
}
