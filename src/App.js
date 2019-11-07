import React from 'react';
import './App.css';
import { games, list } from './games';

import { useCookies } from 'react-cookie';

export default function App() {

  // current game from list
  
  const [cookies, setCookie] = useCookies(['game_meta']);
  const [cg_id, set_cg] = React.useState(cookies.id)

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

  const dropdownlist = range(15).map((item) =>
  <div key={cg_id * item} style={{flexDirection: 'row'}}>
    <Select setCookie={setCookie} set_cg={set_cg} item={item} list={list} offset={0} />
    <Select setCookie={setCookie} set_cg={set_cg} item={item} list={list} offset={1} />
    <Select setCookie={setCookie} set_cg={set_cg} item={item} list={list} offset={2} />
    <Select setCookie={setCookie} set_cg={set_cg} item={item} list={list} offset={3} />
    <Select setCookie={setCookie} set_cg={set_cg} item={item} list={list} offset={4} />
    <Select setCookie={setCookie} set_cg={set_cg} item={item} list={list} offset={5} />
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

function Select({setCookie, set_cg, item, list, offset}) {

  const id = item * 5 + offset

  if (list[id]) {
    return (
      <button onClick={() => {setCookie('id', id); set_cg(id); }}>{list[id].name}</button>
    )
  } else {
    return (null)
  }
}