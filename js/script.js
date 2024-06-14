function clickMenu() {
  const menu = document.getElementById('menu');
  const aside = document.getElementById('aside');

  if (aside.style.display == 'block') {
    aside.style.display = 'none';
  } else {
    aside.style.display = 'block';
  }

}