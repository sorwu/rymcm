"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let result;
// let minimum = 0;
// let maximum = 10;
let generating = false;

function generateLink() {
  result = "https://rateyourmusic.com/";
  generating = true;
  console.log("Generating..." + generating + " = " + result)

  let collection = document.getElementById("collection").value;
  if(collection) result += collection+"/";

  let username = document.getElementById("username").value;
  if(username) result += username+"/";

  let mode = document.getElementById("mode").value;
  if(mode) result += mode;

  let collumns = document.getElementById("collumns").value;
  console.log(collumns);
  if(collumns) result += "d.rp,"+collumns;
  if(collumns>0) {
    document.getElementById("collumns1").style.display = "block";
    let collumns1 = document.getElementById("collumns1").value;
    if(collumns1) result += ","+collumns1;
  } if(collumns1>0) {
    document.getElementById("collumns2").style.display = "block";
    let collumns2 = document.getElementById("collumns2").value;
    if(collumns2) result += ","+collumns2;
  } if(collumns2>0) {
    document.getElementById("collumns3").style.display = "block";
    let collumns3 = document.getElementById("collumns3").value;
    if(collumns3) result += ","+collumns3;
  } if(collumns3>0) {
    document.getElementById("collumns4").style.display = "block";
    let collumns4 = document.getElementById("collumns4").value;
    if(collumns4) result += ","+collumns4;
  } if(collumns4>0) {
    document.getElementById("collumns5").style.display = "block";
    let collumns5 = document.getElementById("collumns5").value;
    if(collumns5) result += ","+collumns5;
  }

  let minimum = document.getElementById("minimum").value;
  if(minimum) {
    result += ",r"+minimum;
  }

  let maximum = document.getElementById("maximum").value;
  if(maximum) {
    result += minimum ? "-" : ",r";
    result += maximum;
  }

  let formats = document.getElementById("formats").value;
  if(formats) result += "."+formats;
  let formats1 = document.getElementById("formats1").value;
  if(formats1) result += "."+formats1;
  let formats2 = document.getElementById("formats2").value;
  if(formats2) result += "."+formats2;
  let formats3 = document.getElementById("formats3").value;
  if(formats3) result += "."+formats3;
  let formats4 = document.getElementById("formats4").value;
  if(formats4) result += "."+formats4;
  let formats5 = document.getElementById("formats5").value;
  if(formats5) result += "."+formats5;

  let type = document.getElementById("type").value;
  if(type) result += ",typ"+type;

  let sort = document.getElementById("sort").value;
  if(sort) result += ",ss."+sort;
  let sort1 = document.getElementById("sort1").value;
  if(sort1) result += "."+sort1;
  let sort2 = document.getElementById("sort2").value;
  if(sort2) result += "."+sort2;
  let sort3 = document.getElementById("sort3").value;
  if(sort3) result += "."+sort3;
  let sort4 = document.getElementById("sort4").value;
  if(sort4) result += "."+sort4;
  let sort5 = document.getElementById("sort5").value;
  if(sort5) result += "."+sort5;

  let descending = document.getElementById("descending").checked;
  console.log(descending);
  if(descending) result += "d";

  let length = document.getElementById("length").value;
  if(length) result += ",n"+length;

  let ownership = document.getElementById("ownership").value;
  if(ownership) result += ",o"+ownership;

  let filter = document.getElementById("filter").value;
  if(filter) result += ",s"+filter;

  let fstring = document.getElementById("fstring").value;
  if(fstring) result += "/"+fstring+"/";

  // let empty = "";
  // empty = document.getElementByTagName("select").value[0];

  generating = false;
}

function resultBtn() {
  // window.open(result);
  window.location.href = result;
}
