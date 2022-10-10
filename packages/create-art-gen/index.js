#!/usr/bin/env node
'use strict';

const prompt = require('prompt-sync')();
const fs = require('fs')

const templateManager = require('./template')
let fileCount = 0;

console.log('You\'re creating a new JS Generated Art! 😁')
console.log('What would you like to call this piece? 🤔')

const title = prompt('Title: ');

const cleanName = title.trim().replaceAll(' ', '-')
console.log(`Creating project in ./${cleanName}`)
fs.mkdir(`./${cleanName}/src`, {recursive: true}, (err) => {
  if(err) throw(err)
  writeFile()
})

function writeFile() {
  const currentFile = templateManager.filesData[fileCount]
  if(currentFile) {
    console.log(`Creating file: ${currentFile.filePath}`)
    fs.writeFile(`./${cleanName}/${currentFile.filePath}`, currentFile.content, (err) => {
      if(err) throw(err)
      fileCount++
      writeFile()
    })
  } else {
    successMessage()
  }
}

function successMessage() {
  console.log(`🎉🎉🎉 Project successfully created! 🎉🎉🎉 
  Enjoy make some art-gen and share your work! 🧑‍🎨
  `)
}