"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
let minimum;
let maximum;

function result() {
  let result = "https://rateyourmusic.com/";

  let collection = document.getElementById("collection").value;
  if(collection) result += collection+"/";

  let username = document.getElementById("username").value;
  if(username) result += username+"/";
  else result += "dyslexicstoner/";

  let mode = document.getElementById("mode").value;
  if(mode) result += mode;

  let rows = document.getElementById("rows").value;
  if(rows) result += ","+rows;

  minimum = document.getElementById("minimum").value;
  if(minimum) result += ",r"+minimum;

  maximum = document.getElementById("maximum").value;
  if(maximum) {
    result += minimum ? "-" : ",r";
    result += maximum;
  }

  let format = document.getElementById("format").value;
  if(format) result += ",fmt."+format;

  let type = document.getElementById("type").value;
  if(type) result += ",typ"+type;

  let sort = document.getElementById("sort").value;
  if(sort) result += ",ss."+sort;

  let length = document.getElementById("length").value;
  if(length) result += ",n"+length;

  let ownership = document.getElementById("ownership").value;
  if(ownership) result += ",o"+ownership;

  let filter = document.getElementById("filter").value;
  if(filter) result += ",s"+filter;

  let fstring = document.getElementById("fstring").value;
  if(fstring) result += "/"+fstring+"/";

  window.location.href = result;
}

/**
 * Minimum and maximum functions (will do later)
 */

function minimum() {

}

function maximum() {

}
