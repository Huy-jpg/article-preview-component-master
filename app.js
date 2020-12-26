const shareBox = document.querySelector('.share'),
      shareIcon = document.querySelector('.share-icon'),
      container = document.querySelector('.container');

shareIcon.addEventListener('click', () => {
  if(shareBox.style.opacity === '0'){
    shareBox.style.opacity = '1';
    shareBox.classList.add('hover')
  } else {
    shareBox.style.opacity = '0'
    shareBox.classList.remove('hover')
  }
})