const weather = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ temp: 29, conditions: 'Sunny with Clouds'})
    }, 6000)
  })
  
  const tweets = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('I like cake, BBQ is ready now !')
      // reject('BBQ 糊了')
    }, 5000)
  })
  
  // 简单 并发
  // 
  // js 单线层， 怎么能并发？
  console.time("time")
  Promise
    // .all([weather, tweets])
    // .race([weather, tweets])
    // .allSettled([weather, tweets])
    .any([weather,tweets])
    .then(responses => {
      console.log(responses);
    })
    .catch(err => {
      console.log(err)
    })
  console.timeEnd("time")