#!/usr/bin/env node
'use strict';

const prompt = require('prompt-sync')();
const fs = require('fs')

console.log('You\'re creating a new JS Generated Art! 😁')
console.log('What would you like to call this piece? 🤔')

const title = prompt('Title: ');

const cleanName = title.trim().replaceAll(' ', '-')
console.log(`Creating project in ./${cleanName}`)
fs.mkdir(`./${cleanName}`, {}, (err) => {
  if(err) throw(err)
  else {
    console.log(`🎉🎉🎉 Project successfully created! 🎉🎉🎉 
Enjoy make some art-gen and share your work! 🧑‍🎨
`)
  }
})
