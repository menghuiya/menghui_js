//父组件
<template>
  <div>
      <son>
          <template slot-scope="todo">
              <ul>
                  <li v-for="item in todo" >{{item}}</li>
              </ul>
          </template>
              
      </son>
  </div>
</template>

<script>
import son from 'son.vue'
export default {
    components:{
        son
    }
}
</script>

<style>

</style>