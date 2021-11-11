<template>
  <div footer>
    <p>Here is Footer</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
[footer] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 5px 80px;
  background: #281E1E;

  p {
    width: 100%;
    text-align: center;
    color: #fff;
  }
}
</style>