<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links{{$store.state.count}}</h2>
      <template>
          <el-radio v-model="radio" label="1">{{$t('login.account')}}</el-radio>
          <el-radio v-model="radio" label="2">{{$t('login.password')}}</el-radio>
      </template>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      radio: '1'
    }
  },
  created () {
    this.test()
  },
  methods: {
    test: function () {
      this.axios.get('/api/code/doCode', {
        headers: {'Content-Type': 'application/json;charset=utf8'}
      }).then(function (res) {
        console.log(res.data)
      }).catch(function (err) {
        if (err.response) {
          console.log('error not get!')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
