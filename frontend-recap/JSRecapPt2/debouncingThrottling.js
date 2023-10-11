// debouncing:

// healthy supplements for dogs and cats probiotic omega 3 fish oil for dogs and cats
// 1 data base read, 50 database reads

function debounce(func, delay) {
    let timeoutId;
  
    return function () {
      const context = this;
      const args = arguments;
  
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(function () {
        func.apply(context, args);
      }, delay);
    };
  }
  
  // Usage
  const debouncedFunction = debounce(function () {
    // Your code to be executed after a delay
  }, 300);


  //Throttling:
  function throttle(func, delay) {
    let canExecute = true;
  
    return function () {
      if (canExecute) {
        func.apply(this, arguments);
        canExecute = false;
        setTimeout(function () {
          canExecute = true;
        }, delay);
      }
    };
  }
  
  // Usage
  const throttledFunction = throttle(function () {
    // Your code to be executed at a limited frequency
  }, 300);