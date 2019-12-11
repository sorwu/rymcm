"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let generating = false;
let storeAnswers;

function generateLink() {
  generating = true;
  let result = "https://rateyourmusic.com/";

  if (generating) {
    let collection = document.getElementById("collection").value;
    if(collection) result += collection+"/";

    let username = document.getElementById("username").value;
    if(username) result += username+"/";

    let mode = document.getElementById("mode").value;
    if(mode) result += mode + ",";

    let columns = document.getElementsByClassName("columns");
    if(columns.length) {
      result += "d.rp";
      for(let i = 0; i < columns.length; i++) {
        console.log(columns[i]);
        result += ","+columns[i].value;
      };
    }

    result += ",r"+document.getElementById("minimum").value+"-"+document.getElementById("maximum").value;

    let format = document.getElementsByClassName("format");
    if(format) result += ",fmt."+format[0];

    let type = document.getElementById("type").value;
    if(type) result += ",typ"+type;

    let sort = document.getElementsByClassName("sort");
    if(sort) result += ",ss."+sort[0];

    let descending = document.getElementsByClassName("descending");
    if(descending[0].checked) result += "d";

    let length = document.getElementById("length").value;
    if(length) result += ",n"+length;

    let ownership = document.getElementById("ownership").value;
    if(ownership) result += ",o"+ownership;

    let filter = document.getElementById("filter").value;
    if(filter) result += ",s"+filter;

    let fstring = document.getElementById("fstring").value;
    if(fstring) result += "/"+fstring+"/";

    storeAnswers = `${result}`;

    generating = false;
  }
  //console.log(`${generating} - ${result} ... ${storeAnswers}`);
}

function managedCollection() {
  if (storeAnswers && !generating) {
    window.location.assign(storeAnswers);
  }
}

generateLink(); // Generates link on page load

function addColumn() {
  let p = document.getElementById("columnsP");
  p.innerHTML = p.innerHTML.replace('<button onclick="addColumn()">Add</button>', "")
  + `
    <select class="columns">
      <option value="a">Artist</option>
      <option value="l">Release</option>
      <option value="al">Artist / release year</option>
      <option value="albj">Artist / release year / label</option>
      <option value="alh">Artist / release year / genre</option>
      <option value="albjh">Artist / release year / label / genre</option>
      <option value="aat">Cover</option>
      <option value="ts">Star rating</option>
      <option value="tn">Number rating</option>
      <option value="o">Ownership / format</option>
      <option value="g">Tags</option>
      <option value="tl">Track list</option>
      <option value="v">Review</option>
      <option value="r">Date entered</option>
      <option value="q">Date aquired</option>
      <option value="n">Number of copies</option>
      <option value="p">Price</option>
      <option value="u">Username</option>
      <option value="c">Collumn number</option>
      <option value="f">Film title</option>
    </select>
    <button onclick="addColumn()">Add</button>
    `;
}

function addFormat() {
  let p = document.getElementById("formatP");
  p.innerHTML = p.innerHTML.replace('<button onclick="addFormat()">Add</button>', "")
  + `
    <select class="format">
      <option value="">All</option>
      <option value="CD">CD</option>
      <option value="LP">LP</option>
      <option value="Cassette">Cassette</option>
      <option value="Minidisc">Minidisc</option>
      <option value="MP3">MP3</option>
      <option value="DVD-A">DVD-A</option>
      <option value="SACD">SACD</option>
      <option value="Multiple">Multiple</option>
      <option value="8-Track">8-Track</option>
      <option value="CD-R">CD-R</option>
      <option value="Other">Other</option>
      <option value="DVD">DVD</option>
      <option value="VHS">VHS</option>
    </select>
    <button onclick="addFormat()">Add</button>
    `;
}

function addSort() {
  let p = document.getElementById("sorting");
  p.innerHTML = p.innerHTML.replace('<button onclick="addSort()">Add</button>', "")
  + `
    <select class="sort">
      <option value="a">Artist</option>
      <option value="l">Release title</option>
      <option value="e">Release date</option>
      <option value="t">Release art colour</option>
      <option value="r">Rating</option>
      <option value="o">Ownership / format</option>
      <option value="d">Date entered</option>
      <option value="p">Date aquired</option>
      <option value="c">Price</option>
      <option value="f">Film title</option>
    </select>
    <input class="descending" type="checkbox"><label>(Reversed)</label>
    <button onclick="addSort()">Add</button>
    `;
}