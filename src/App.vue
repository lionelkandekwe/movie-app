<template>
  <header>
    <router-link to="/" >
      <h1> <span> Movies Web App</span></h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
  
</template>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  & ::selection{
    background: transparentize($color: #b2d8d8, $amount: 0.5);
  }
}
body{
  background: #354952;
}
a{
  text-decoration: none;
}
header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
}
h1{
  color: #FFF;
  font-size: 28px;
  span{
    color: #77bbe6;
  }
}
</style>
