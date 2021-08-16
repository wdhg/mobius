const transitions = {
  'transition':'transitionend',
  'OTransition':'oTransitionEnd',
  'MozTransition':'transitionend',
  'WebkitTransition': 'webkitTransitionEnd'
}

const getSystemTransitionProperty = (element) => {
  for (const t in transitions) {
    if (element.style[t] !== undefined) {
      return transitions[t];
    }
  }

  console.error('Unable to find a transition event');

  return null;
}

const mobius = document.getElementById("mobius");
const transitionEvent = getSystemTransitionProperty(mobius);

if (transitionEvent !== null) {
  let animating = false;
  let angle = 0;

  mobius.addEventListener(transitionEvent, () => {
    animating = false;

    if (angle < 360) {
      return;
    }

    angle = 0;
    mobius.style.transition = 'transform 0s ease-in-out';
    mobius.style.transform = `rotate(0deg)`;
  });

  mobius.onmouseover = () => {
    if (animating) {
      return;
    }

    animating = true;
    angle += 120;
    mobius.style.transition = 'transform .8s ease-in-out';
    mobius.style.transform = `rotate(${angle}deg)`;
  }
}
