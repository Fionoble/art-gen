const stylecss = `
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
}

#downloadButton, #redrawButton {
  position: absolute;
  width: 100px;
  height: 50;
  right: 10px;
  border-radius: 4px;
  background-color: darkslategrey;
  color: white;
  padding: 4px 6px;
  cursor: pointer;
  opacity: 0.7;
}

#downloadButton {
  top: 10px;
}

#redrawButton {
  top: 60px;
}

#downloadButton:hover, #redrawButton:hover {
  opacity: 1;
}
#downloadButton:active, #redrawButton:active {
  background-color: rgb(55, 121, 110);
}
`

module.exports = stylecss