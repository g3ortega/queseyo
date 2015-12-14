"use strict";

var API_URL = "http://queseyo.co/wp-json/"

function getData(URL) {
  return fetch(URL)
         .then((response) => response.json())
}
