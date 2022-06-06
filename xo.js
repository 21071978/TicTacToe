function Record(value) {
  
  
  //localStorage.setItem("myTableWin", JSON.stringify(TableWin));
  if (localStorage.TableHistory){
  let TableWin1 = localStorage.getItem("TableHistory");
  TableWin1 = JSON.parse(TableWin1);
  console.log(TableWin1);
  console.log(value);
  //(TableWin[value]<0 || TableWin[value]>100 ||isNaN(TableWin[value])||TableWin[value]==null)
  if (isNaN(TableWin1[value])==true&&TableWin1[value]!=null){
  savedx = TableWin1[value].filter((v) => v.type == "x");
  savedx.forEach((v) => {
    document.getElementById(v.key).classList.replace("styleE", "styleX");
  });
  savedo = TableWin1[value].filter((v) => v.type == "o");
  savedo.forEach((v) => {
    document.getElementById(v.key).classList.replace("styleE", "styleO");
  });
 
  
  alert("yofiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
}
else alert ("there isnt record at value-",value)
}
else alert ("there isnt record at value-",value)
}
let hours = 0,
  minutes = 0,
  seconds = 0;
const timer = document.getElementById("timer");
timer.innerText = `0${hours}:0${minutes}:0${seconds}`;

const setTimer = setInterval(myTimer, 1000);
function myTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10 && Number.isInteger(minutes)) {
    minutes = `0${minutes}`;
  }
  if (hours < 10 && Number.isInteger(hours)) {
    hours = `0${hours}`;
  }
  timer.innerText = `${hours}:${minutes}:${seconds}`;
}

function newGame(list, value) {
  hours = 0;
  minutes = 0;
  seconds = 0;
  for (i = 0; i < value; i++) {
    for (j = 0; j < value; j++) {
      list[i][j].type = 0;
      document
        .getElementById("".concat(i, j))
        .classList.remove("styleX", "styleO");
      document.getElementById("".concat(i, j)).classList.add("styleE");
    }
  }
  history = [];
  tor = 0;
}
function showRecord() {
  const popup = document.getElementById("popup");
  popup.classList.toggle("show");
  console.log(popup);
}
function changeState(list, value) {
  //dellGame(list,value)
  value = Number(prompt("How many rows in the game?"));
  console.log(list, "list");
  initBoard(value);
}
function saveGame(list, value) {
  if (history.length>0){
  localStorage.setItem("saved list", JSON.stringify(list));
  localStorage.setItem("savedValue", value);
  localStorage.setItem("saved history", JSON.stringify(history));
  localStorage.setItem("saved turn", tor);
  }
  else alert ("the board is empty")
}
function loadGame() {
  if (localStorage.savedValue)
  {
  value = Number(localStorage.getItem("savedValue"));
  tor = Number(localStorage.getItem("saved turn"));
  list = JSON.parse(localStorage.getItem("saved list"));
  hours = 0;
  minutes = 0;
  seconds = 0;
  initBoard(value);
  history = JSON.parse(localStorage.getItem("saved history"));

  let flatList = list.flat();
  savedx = flatList.filter((v) => v.type == "x");
  savedx.forEach((v) => {
    document.getElementById(v.key).classList.replace("styleE", "styleX");
  });
  savedo = flatList.filter((v) => v.type == "o");
  savedo.forEach((v) => {
    document.getElementById(v.key).classList.replace("styleE", "styleO");
  });
}
else alert ('there isnt saved play')
}
function initBoard(value) {
  history = [];
  // let counter = 0;
  hamburger.onclick = function () {
    // counter++;
    this.classList.toggle("change");
    document.getElementById("side-bar").classList.toggle("open-side-bar");
  };
  //debugger
  let board = document.getElementById("board");
  board.innerHTML = "";
  board.style.width = 110 * value + "px";
  board.style.height = 110 * value + "px";
  let list = [];
  for (let i = 0; i < value; i++) {
    list[i] = [];
    for (let j = 0; j < value; j++) {
      list[i][j] = {
        type: 0,
        key: "".concat(i, j),
      };
      console.log(list);
      board.inn;
      elem = document.createElement("div");
      elem.id = list[i][j].key;
      elem.classList.add("styleE");
      elem.onclick = (e) => changeTurn(e, list, value);
      board.append(elem);
      back = document.getElementById("back");
      back.onclick = (e) => stepback(list, elem);
     // document.getElementById("Record").onclick = () => showRecord();
      document.getElementById("change").onclick = () => changeState();
      document.getElementById("load").onclick = () => loadGame();
      document.getElementById("save").onclick = () => saveGame(list, value);
      document.getElementById("new-game").onclick = () => newGame(list, value);
      document.getElementById("Record").onclick = () => Record(value);
    }
  }
}


function checkVictory(value, list) {
  let TableHistory=[];
  let Res;
  let Res1;
  let Vic;
  //console.log(list);
  for (let i = 0; i < value; i++) {
    Res = "";
    Res1 = "";
    for (let j = 0; j < value; j++) {
      Res = Res + list[i][j].type;
      Res1 = Res1 + list[j][i].type;
    }
    Res = Res.split("");
    // console.log(Res,"res");
    Res1 = Res1.split("");
    console.log(Res, "res");
    if (
      Res.every((i) => {
        return i == "x";
      }) == true
    )
    {
      alert("resXXXXXXXXXXXXXXX");
      Vic=true
    }
    if (
      Res.every((i) => {
        return i == "o";
      }) == true
    )
    {
      alert("resooooooooooooooo");
      Vic=true
    }
    if (
      Res1.every((i) => {
        return i == "x";
      }) == true
    )
    {
      alert("resXXXXXXXXXXXXXXX");
      Vic=true
    }
    if (
      Res1.every((i) => {
        return i == "o";
      }) == true
    )
    {
      alert("resooooooooooooooo");
      Vic=true
    }
  }
  Res = "";
  Res1 = "";
  for (let j = 0; j < value; j++) {
    Res = Res + list[j][j].type;
    Res1 = Res1 + list[j][value - j - 1].type;
  }
  Res = Res.split("");
  Res1 = Res1.split("");
  if (
    Res.every((i) => {
      return i == "x";
    }) == true
  )
  {
    alert("resXXXXXXXXXXXXXXX");
    Vic=true
  }
  if (
    Res.every((i) => {
      return i == "o";
    }) == true
  )
  {
    alert("resooooooooooooooo");
    Vic=true
  }
  if (
    Res1.every((i) => {
      return i == "x";
    }) == true
  )
  {
    alert("resXXXXXXXXXXXXXXX");
    Vic=true
  }
  if (
    Res1.every((i) => {
      return i == "o";
    }) == true
  )
  {
    alert("resooooooooooooooo");
    Vic=true
  }

  /* const Car = {
      brand:"Suzuki",
      color:"white",
      price:10000
    } */
    if (Vic==true)
    {
    let text=history.length/2
    console.log(text,"aaaaaaaaaaaaaaaaaaaaaaaa");
    if (localStorage.TableHistory){
      
      TableHistory = localStorage.getItem('TableHistory');
      TableHistory = JSON.parse(TableHistory);
     console.log(TableHistory, "TableHistoryvvvvvvvvvvvvvv");
    }
    if (localStorage.myTableWin){
      
       TableWin = localStorage.getItem('myTableWin');
       TableWin = JSON.parse(TableWin);
      console.log(TableWin, "TableWinvvvvvv");
      
      if (TableWin[value]<0 || TableWin[value]>100 ||isNaN(TableWin[value])||TableWin[value]==null)  {
        TableWin[value] = text;
        TableHistory[value]=history
        console.log("yofi");}
      
      else if 
      (TableWin[value] >text){
        TableWin[value] = text
        TableHistory[value]=history
        //TableWin[5]=10
        console.log("yofi1")}

      localStorage.setItem('TableHistory', JSON.stringify(TableHistory));
      localStorage.setItem('myTableWin', JSON.stringify(TableWin));
      console.log(history, "hiostory");

      console.log(TableHistory, "TableHistory");
      console.log(TableWin, "TableWin");
      console.log((history.length) / 2,"history")
      console.log(history,"hisssssssssssssssssssss");
     
    }
    else{
let TableWin=[]
      TableWin[value] = text
      //TableWin[5]=10
      TableHistory[value]=history
    localStorage.setItem('myTableWin', JSON.stringify(TableWin));
    localStorage.setItem('TableHistory', JSON.stringify(TableHistory));

    }
  // window.localStorage.setItem('car', JSON.stringify(Car));
  }
}
function stepback(list, elem) {
  if (history.length > 0) {
    let his1 = history.pop();
    let his = history.pop();

    console.log(his);
    console.log(his1);
    //list[his.key[0]][[his.key[1]]].type=0
    if (his.type == "x") {
      console.log("enter");
      document.getElementById(his1).classList.replace("styleX", "styleE");
      list[his.key[0]][[his.key[1]]].type = 0;
      tor = 0;
    } else {
      document.getElementById(his1).classList.replace("styleO", "styleE");
      list[his.key[0]][[his.key[1]]].type = 0;
      tor = 1;
    }
  }
}

function changeTurn(e, list, value) {
  //console.log(event)
  let x = e.target.id;
  let y = e.target;
  //console.log(list,"dfsgggggggg",x)
  if (list[Number(x[0])][Number(x[1])].type == 0) {
    if (tor == 0) {
      y.classList.replace("styleE", "styleX");
      list[Number(x[0])][Number(x[1])].type = "x";
      tor++;
    } else {
      y.classList.replace("styleE", "styleO");
      list[Number(x[0])][Number(x[1])].type = "o";
      tor = 0;
    }
    history.push(list[Number(x[0])][Number(x[1])]);
    console.log(history);
    history.push(x);
    let Res = checkVictory(value, list);
    if (Res) alert("victory");
    //console.log(list[Number(x[0])][Number(x[1])].type);
    //console.log(history);
  }
}
//**************************************************************** */
let value = 3;
//let list=[value]
let tor = 0;
let history = [];

initBoard(value);
