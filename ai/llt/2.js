function generateRandomAge() {
  const minAge = 18;
  const maxAge = 60;
  return Math.floor(Math.random() * (maxAge - minAge +1) +minAge);
}
console.log(generateRandomAge());

