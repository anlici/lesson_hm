
const user = {
    count: 0,
    getCount() {
      return this.count;
    }
  }
  const func = user.getCount;
  console.log(func()); // undefined
  