import React from 'react';
import './App.css';
import { games, list } from './games';

export default function App() {

  // current game from list
  const [cg_id, set_cg] = React.useState()

  console.log(cg_id)

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const range = n => [...Array(n).keys()]

  const dropdownlist = range(14).map((item) =>
  <div style={{flexDirection: 'row'}}>
    <button onClick={() => {set_cg(item * 5 + 0)}}>{list[item * 5 + 0].name}</button>
    <button onClick={() => {set_cg(item * 5 + 1)}}>{list[item * 5 + 1].name}</button>
    <button onClick={() => {set_cg(item * 5 + 2)}}>{list[item * 5 + 2].name}</button>
    <button onClick={() => {set_cg(item * 5 + 3)}}>{list[item * 5 + 3].name}</button>
    <button onClick={() => {set_cg(item * 5 + 4)}}>{list[item * 5 + 4].name}</button>
  </div>
    
  );

  return (
    <div className="App">
      <h1>bored in class</h1>

      <div className="dropdown">
        <button onClick={myFunction} className="dropbtn">{cg_id ? list[cg_id].name : 'select a game'}</button>
        <div id="myDropdown" className="dropdown-content">
          {dropdownlist}
        </div>
      </div>

      <Game game={cg_id ? games[list[cg_id].game] : null}/>
      
      
    </div>
  );
}

function Game({game}) {
  if (game) {
    return (
      <object width="100%" height="100%"
        data={game} type="application/x-shockwave-flash">
        <param name="quality" value="autohigh" />
        <param name="allowFullScreen" value="true" />
        <param name="wmode" value="direct" />
        <param name="allowScriptAccess" value="always" />
        <param name="scale" value="showall" />
        <param name="bgcolor" value="red" />
        <param name="hasPriority" value="true" />
        <param value="internal" name="allownetworking" />
      </object>
    )
  } else {
    return (null)
  }
}