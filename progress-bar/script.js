const progress = document.getElementById('progress'); //blue line
const prev = document.getElementById('prev'); //Prev button
const next = document.getElementById('next'); //next btn
const circles = document.querySelectorAll('.circle');

let activeIndex = 1;

const update = () => {
  //implementin the disabled or enabled phases of the buttons
  if (activeIndex === 1) {
    prev.disabled = true;
  } else if (activeIndex === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  circles.forEach((circle, index) => {
    if (index < activeIndex) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
};

next.addEventListener('click', () => {
  activeIndex++;

  if (activeIndex > circles.length) {
    activeIndex = circles.length;
  }
  //making the active or non active classes when clicked
  update();

  //handling the blue progress line
  const actives = document.querySelectorAll('.active');

  //4 circles but 3 line breaks that's where the -1 comes
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
});

prev.addEventListener('click', () => {
  activeIndex--;

  if (activeIndex < 1) {
    activeIndex = 1;
  }
  //making the active or non active classes when clicked
  update();

  //handling the blue progress line
  const actives = document.querySelectorAll('.active');

  //4 circles but 3 line breaks that's where the -1 comes
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
});
