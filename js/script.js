"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let link = "";
let prefix = "";
let username = "dyslexicstoner";
let collection = "";
let mode = "";
let row = "";
let minimum = "";
let maximum = "";
let format = "";
let type = "";
let length = "";
let ownership = "";
let filter = "";
let string = "";
let result = "";

function preload() {
  prefix = "https://rateyourmusic.com/";
  result = prefix;
}

function setup() {
}

function draw() {
}

function changed() {
  username = select("#usernames");
  document.getElementById("usernames").onchange = usernames();

  collection = select("#collections");
  document.getElementById("collections").onchange = collections();

  mode = select("#modes");
  document.getElementById("modes").onchange = modes();

  row = select("#rows");
  document.getElementById("rows").onchange = rows();

  minimum = select("#minimums");
  document.getElementById("minimums").onchange = minimums();

  maximum = select("#maximums");
  document.getElementById("maximums").onchange = maximums();

  format = select("#formats");
  document.getElementById("formats").onchange = formats();

  type = select("#types");
  document.getElementById("types").onchange = types();

  sort = select("#sorts");
  document.getElementById("sorts").onchange = sorts();

  length = select("#lengths");
  document.getElementById("lengths").onchange = lengths();

  ownership = select("#ownerships");
  document.getElementById("ownerships").onchange = ownerships();

  filter = select("#filters");
  document.getElementById("filters").onchange = filters();

  string = select("#strings");
  document.getElementById("strings").onchange = strings();

  resultant();
}

function usernames() {
  username = document.getElementById("usernames").value;

  if (document.getElementById("usernames").value === "") {
    username = "";
  }
}

function collections() {
  collection = "/" + document.getElementById("collections").options[document.getElementById("collections").selectedIndex].text;

  if (document.getElementById("collections").options[document.getElementById("collections").selectedIndex].value == 0) {
    collection = "";
  }
}

function modes() {
  mode =  "/" + document.getElementById("modes").options[document.getElementById("modes").selectedIndex].text;

  if (document.getElementById("modes").options[document.getElementById("modes").selectedIndex].value == 0) {
    mode = "";
  }
}

function rows() {
  row = "," + document.getElementById("rows").options[document.getElementById("rows").selectedIndex].text;

  if (document.getElementById("rows").options[document.getElementById("rows").selectedIndex].value == 0) {
    row = "";
  }
}

function minimums() {
  minimum = "," + document.getElementById("minimums").options[document.getElementById("minimums").selectedIndex].text;

  if (document.getElementById("minimums").options[document.getElementById("minimums").selectedIndex].value == 0) {
    minimum = "";
  }
}

function maximums() {
  maximum = "-" + document.getElementById("maximums").options[document.getElementById("maximums").selectedIndex].text;

  if (document.getElementById("maximums").options[document.getElementById("maximums").selectedIndex].value == 0) {
    maximum = "";
  }
}

function formats() {
  format = ",fmt." + document.getElementById("formats").options[document.getElementById("formats").selectedIndex].text;

  if (document.getElementById("formats").options[document.getElementById("formats").selectedIndex].value == 0) {
    format = "";
  }
}

function types() {
  type = ",typ" + document.getElementById("types").options[document.getElementById("types").selectedIndex].text;

  if (document.getElementById("types").options[document.getElementById("types").selectedIndex].value == 0) {
    type = "";
  }
}

function sorts() {
  sort = ",ss." + document.getElementById("sorts").options[document.getElementById("sorts").selectedIndex].text;

  if (document.getElementById("sorts").options[document.getElementById("sorts").selectedIndex].value == 0) {
    sort = "";
  }
}

function lengths() {
  length = ",n" + document.getElementById("lengths").value;

  if (length === ",n") {
    length = "";
  }
}

function ownerships() {
  ownership = ",o" + document.getElementById("ownerships").options[document.getElementById("ownerships").selectedIndex].text;

  if (document.getElementById("ownerships").options[document.getElementById("ownerships").selectedIndex].value == 0) {
    ownership = "";
  }
}

function filters() {
  filter = ",s" + document.getElementById("filters").options[document.getElementById("filters").selectedIndex].text;

  if (document.getElementById("filters").options[document.getElementById("filters").selectedIndex].value == 0) {
    filter = "";
  }
}

function strings() {
  string = "/" + document.getElementById("strings").value + "/";

  if (document.getElementById("strings").value === "/") {
    string = "";
  }
}


function resultant() {
  result = `${prefix}${username}${collection}${mode}${row}${minimum}${maximum}${format}${type}${length}${ownership}${filter}${string}`;
  document.querySelector('#result').href = result;
}
