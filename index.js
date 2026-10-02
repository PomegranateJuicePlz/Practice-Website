function TitleChange() {

    document.querySelector("input").value;
    document.title = document.querySelector("input").value;
    console.log("title changed")
}

function loading() {
    let ls = localStorage.getItem("counter");
    let ss = sessionStorage.getItem("counter");

    if (ls) {
        document.getElementById("lsBtn").innerText = ls;
    }

    if (ss) {
        document.getElementById("ssBtn").innerText = ss;
    }
}

function increaseLocal() {
    let count = Number(localStorage.getItem("counter")) || 0;
    count++;
    localStorage.setItem("counter", count);
    document.getElementById("lsBtn").innerText = count;
}


function increaseSession() {
    let count = Number(sessionStorage.getItem("counter")) || 0;
    count++;
    sessionStorage.setItem("counter", count);
    document.getElementById("ssBtn").innerText = count;
}










