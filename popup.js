// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict";
//stretch feature- pause button
//show countdown of timer
document.addEventListener("DOMContentLoaded", function (event) {
  //do work

  const start = document.getElementById("start-timer");

  start.addEventListener("click", function () {
    // pull the current time in millisecond
    const startDate = Date.now();

    console.log("start date", startDate);
    // gets the study time input from user
    const studytime = document.getElementById("StudyTime").value; //minutes
    console.log(studytime);

    // sets the end study time for user in milliseconds
    const studyEnd = startDate + studytime * 60000;
    console.log("study end", studyEnd);

    // gets the break time input from user
    const breaktime = document.getElementById("BreakTime").value; //minutes
    // sets the end break time for user in milliseconds
    const breakEnd = startDate + (studytime + breaktime) * 60000;
    console.log("break end", breakEnd);

    //when countdown is done for study, immediately start counting down break time

    //when stop time is reached, play beep sound
    setInterval(function () {
      const currTime = Date.now(); //milliseconds
      console.log("current time", currTime);
      console.log("set interval study end", studyEnd);
      if (currTime >= studyEnd) {
        console.log("study time complete");
      }
    }, 10000);
    //when break time is reached, play beep sound
    setInterval(function () {
      const currTime = Date.now();
      if (currTime >= breakEnd) {
        console.log("break time complete");
      }
    }, 10000);
  });

  // add set interval to check timer
});

//chrome boilerplate code

// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };
