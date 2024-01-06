function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  function onEntry2(entry) {
    entry.forEach(change => {      
      if (change.isIntersecting) {
       change.target.classList.add('element-show-2');
      }
    });
  }

  function onEntry3(entry) {
    entry.forEach(change => {      
      if (change.isIntersecting) {
       change.target.classList.add('element-show-3');
      }
    });
  }


  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  let elements2 = document.querySelectorAll('.element-animation-2');
  let elements3 = document.querySelectorAll('.element-animation-3');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  
  for (let elm of elements2) {
    observer.observe(elm);
  }

  for (let elm of elements3) {
    observer.observe(elm);
  }