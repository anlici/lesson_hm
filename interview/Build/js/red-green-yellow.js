function red() {
    console.log('red')
  }
  
  function green() {
    console.log('green')
  }
  
  function yellow() {
    console.log('yellow')
  }

  function light(fn,delay) {
    // setInterval(fn,delay)
    return new Promise((resolve) => {
      setTimeout(() => {
        fn();
        resolve();
      },delay)
    })
  }
  async function run() {
    while(true) {
      await light(red,3000)
      await light(green,2000)
      await light(yellow,1000) 
    } 
  }
  run()