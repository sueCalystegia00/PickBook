<template>
  <div id="app">
    <div id="background"></div>
    <router-view/>
  </div>
</template>

<style>
html, body, #app {
  font-family: 'ヒラギノ角ゴシック','Hiragino Sans','Avenir','Arial',sans-serif;
  font-size: 14px;
  width: 100%;
  min-width: 320px;
  margin: 0;
  padding: 0;
  color: #4B4B4B;
}

#background
{
  position: fixed;
  background: linear-gradient(180deg, rgba(227, 238, 255, 0.6) 0%, rgba(241, 232, 236, 0.6) 99.99%, rgba(243, 231, 233, 0) 100%, rgba(243, 231, 233, 0.6) 100%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -9999;
}
</style>
