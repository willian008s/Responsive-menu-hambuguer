var ul = document.querySelector(' nav ul')

var menuaa = document.querySelector('span')


function menu(){

  if (ul.classList.contains('open')) {
    ul.classList.remove('open')
  }
  else{
    ul.classList.add('open')
  }
}



