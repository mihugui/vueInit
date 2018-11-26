<template>
  <div class="layout">
    <Input v-model="playerName1" @on-change="ModifyName" placeholder="Enter name..." style="width: 300px" ></Input>
    <Input v-model="playerName" placeholder="Enter name..." style="width: 300px" ></Input>
    <Input v-model="playerName2" placeholder="Enter name..." style="width: 300px" ></Input>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      playerName1: '',
      playerName2: ''
    }
  },
  computed: {
    ...mapGetters([
      'playerName'
    ])
  },
  watch: {
    playerName: function () {
      this.playerName2 = this.playerName
    }
  },
  methods: {
    ...mapActions([
      'setPlayerName'
    ]),
    ModifyName: function () {
      this.setPlayerName(this.playerName1)
    }
  }
}
</script>

<style scoped>
  .layout{
    background: #f5f7f9;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
