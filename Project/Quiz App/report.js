function onload() {
    let report = JSON.parse(localStorage.getItem("report"));
    console.log(report);
    let parent = document.querySelector("#parent");

    parent.innerHTML = `<h1>REPORT CARD</h1>
        <h3>Total Question: ${report.totalQues}</h3>
        <h3>Correct Question: ${report.correctAnsCount}</h3>
        <h3>Wrong Question: ${report.wrongAnsCount}</h3>
        <h3>Percentage%: ${report.percentage}</h3>
        <h3>Rank: ${report.rank}</h3>`
}

onload();