const thankYou = document.getElementById('thanks');
const ratingNums = document.querySelectorAll('li');
const yourRating = document.querySelector('span');
const submit = document.querySelector('button');
const firstSection = document.querySelector('section');
const ul = document.querySelector('ul');


submit.addEventListener('click', function(){
    firstSection.style.display = 'none';
    thankYou.style.display = 'flex';
})

for (const li of ratingNums) {
    li.addEventListener('click', function() {
      li.style.backgroundColor = 'grey';
      const rating = this.textContent;
      yourRating.textContent =rating;
    });
  }











