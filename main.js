import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();
warmup2();
warmup3();

function warmup1() {
  let i = 0;
  console.log("Exercise week 1");
  document.getElementById("button-1a").addEventListener("click", () => {
    document.getElementById("content-1").innerHTML = "<p>Hallo, dit is de oefening van Lukas.</p>";
    i = 0;
  });
  document.getElementById("button-1b").addEventListener("click", () => {
    let colorR = Math.round(Math.random()*255);
    let colorG = Math.round(Math.random()*255);
    let colorB = Math.round(Math.random()*255);
    document.getElementById("section-1").style.backgroundColor = "rgb(" + colorR + ", " + colorG + ", " + colorB + ")";
  });
  document.getElementById("button-1c").addEventListener("click", () => {
    if (i == 0) {
      let txtElement = document.createElement("h1");
      txtElement.innerHTML = "Ik ben er klaar voor";
      document.getElementById("content-1").appendChild(txtElement);
      i++;
    }
  });
}

function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
    let j = 0;
    document.getElementById("button-2a").addEventListener("click", () => {
      const contentElement = document.getElementById("content-2");
      const ulElement = document.createElement("ul");
      contentElement.innerHTML = "";
      for (let i = 0; i < scores.length; i++) {
        const ilElement = document.createElement("li");
        ilElement.innerHTML = scores[i];
        ulElement.appendChild(ilElement);
      }
      contentElement.appendChild(ulElement);
      j = 0;
    });
    document.getElementById("button-2b").addEventListener("click", () => {
      const contentElement = document.getElementById("content-2");
      const ulElement = document.createElement("ul");
      contentElement.innerHTML = "";
      scores.sort(compareNumbers);
      for (let i = 0; i < scores.length; i++) {
        const ilElement = document.createElement("li");
        ilElement.innerHTML = scores[i];
        ulElement.appendChild(ilElement);
      }
      contentElement.appendChild(ulElement);
      j = 0;
    });
    document.getElementById("button-2c").addEventListener("click", () => {
      if (j == 0) {
        const contentElement = document.getElementById("content-2");
        const h1Element = document.createElement("h1");
        let total = 0;
        for (let i = 0; i < scores.length; i++) {
          total += scores[i];
        }
        h1Element.innerHTML = "Som scores: " + total;
        contentElement.appendChild(h1Element);
        j = 1;
      }
    });
}

function compareNumbers(a, b) {
  return a - b;
}

function warmup3() {
  document.getElementById("button-3a").addEventListener("click", () => {
    let student = getStudentJSON();
    let json = JSON.parse(student);
    console.log(json);
  });
  document.getElementById("button-3b").addEventListener("click", () => {
    let student = getStudentJSON();
    let jsonObject = JSON.parse(student);
    const contentElement = document.getElementById("content-3");
    contentElement.innerHTML = "";
    let nameElement = document.createElement("h1");
    nameElement.innerHTML = "Naam: " + jsonObject.firstname;
    contentElement.appendChild(nameElement);
    let ageElement = document.createElement("h1");
    ageElement.innerHTML = "Leeftijd: " + jsonObject.age;
    contentElement.appendChild(ageElement);
  });
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}