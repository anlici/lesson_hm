<template>
    <div class="start">
      <div class="welcome">欢迎使用AI小艺</div>
      <div class="title">
        <h1 data-text="TourTrace">NexTravel</h1>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="css" scoped>
  .start {
    color: #b700ff;
    font-family: "Times New Roman", Times, serif;
    min-height: 92vh;
    background: url('https://img1.baidu.com/it/u=3986848745,3178816830&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1000');
    background-size: cover;
    margin: 0.5rem 0.5rem 2.5rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
  }
  
  .welcome {
    font-size: 2rem;
    margin-bottom: 1rem;
    background-color: #cac3c3;
    border-radius: 3rem;
    padding: 0.5rem;
    opacity: 0.8;
    font-bold: bolder;
    
  }
  
  h1 {
    color: #f7f3f3;
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    font-size: 5rem;
    letter-spacing: -0.3rem;
    position: relative;
  }
  
  h1::after {
    content: attr(data-text);
    color: transparent;
    position: absolute;
    left: 0;
    top: 0;
    clip-path: circle(100px at 0% 50%);
    animation: movelight 3s infinite;
    background: url("https://img0.baidu.com/it/u=1568996125,2158202347&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500")
      no-repeat center center;
    background-size: cover;
    background-clip: text;
  }
  
  @keyframes movelight {
    0% {
      clip-path: circle(100px at 0% 50%);
    }
    50% {
      clip-path: circle(100px at 100% 50%);
    }
    100% {
      clip-path: circle(100px at 0% 50%);
    }
  }
  </style>