//Lyssna på klick av knappen
document.querySelector('button').addEventListener('click', function () {
  //Byt bakgrundsfärg
  document.body.classList.toggle('dark');
  document.querySelector('h1').classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    alert("Dark Mode Activated");
  } else {
    alert("Dark Mode Deactivated");
  }

  document.querySelector('.kontainer').classList.toggle('dark');

  //Byt bakgrundsfärg på alla fem knappar
  document.querySelectorAll('a').forEach((el) => {
    el.classList.toggle('dark');
  });

  //Byt ut textinnehåll
  document.querySelector('h1').innerHTML =
    'Tjohoo va kul!!<button>Dark Mode</button>';

    document.querySelector('.kontainer').innerHTML =
    ' <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Operation_Upshot-Knothole_-_Badger_001.jpg" alt="Explosion">'
});
