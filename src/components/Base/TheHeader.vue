<template>
  <header class="header">
    <div class="header__logo"></div>

    <div class="header__search">
      <input type="text" />
    </div>

    <button class="header__btn btn">Connect wallet</button>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  background: #30363d;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  border-radius: 0px 0px 32px 32px;

  &__logo {
    background: red;
    width: 80px;
    height: 30px;
  }

  &__search {
    background: #1d2228;
    width: 100%;
    input {
      width: 100%;
    }
  }

  &__btn {
    height: 30px;
  }
}
</style>
