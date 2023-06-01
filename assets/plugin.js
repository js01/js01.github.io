const clip = document.querySelector('.clip')
clip.classList.remove('clip')
clip.classList.add('text-gradient')


document.querySelector('img').src=`https://js01.github.io/images/emojis/${Math.round(Math.random()*20+1)}.gif`