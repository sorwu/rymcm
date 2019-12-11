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

    let collumns = document.getElementById("collumns").value;
    if(collumns) result += "d.rp,"+collumns;
    let collumns1 = document.getElementById("collumns1").value;
    if(collumns1) result += ","+collumns1;
    let collumns2 = document.getElementById("collumns2").value;
    if(collumns2) result += ","+collumns2;
    let collumns3 = document.getElementById("collumns3").value;
    if(collumns3) result += ","+collumns3;
    let collumns4 = document.getElementById("collumns4").value;
    if(collumns4) result += ","+collumns4;
    let collumns5 = document.getElementById("collumns5").value;
    if(collumns5) result += ","+collumns5;

    let minimum = document.getElementById("minimum").value;
    if(minimum) {
      result += ",r"+minimum;
    }

    let maximum = document.getElementById("maximum").value;
    if(maximum) {
      result += minimum ? "-" : ",r";
      result += maximum;
    }

    let format = document.getElementById("format").value;
    if(format) result += ",fmt."+format;
    let format1 = document.getElementById("format1").value;
    if(format1) result += "."+format1;
    let format2 = document.getElementById("format2").value;
    if(format2) result += "."+format2;
    let format3 = document.getElementById("format3").value;
    if(format3) result += "."+format3;
    let format4 = document.getElementById("format4").value;
    if(format4) result += "."+format4;
    let format5 = document.getElementById("format5").value;
    if(format5) result += "."+format5;

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
    // console.log(descending);
    if(descending) result += "d";

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
  console.log(`${generating} - ${result} ... ${storeAnswers}`);
}

function managedCollection() {
  if (storeAnswers && !generating) {
    window.location.assign(storeAnswers);
  }
}
