<template lang="html">
  <div class="" v-if="card.status == 'BackLog'">
    <div class="card card-space">
      <h5 class="card-header">{{card.title}}</h5>
      <div class="card-body">
        <p class="card-text">{{card.description}}</p>
        <p class="card-text"></p>
        <p class="card-text">Point: {{card.point}}</p>
        <p class="card-text">Assigned to: {{card.assignto}}</p>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit" data-toggle="modal" data-target="#detailmodal" v-on:click="setone(card)">detail</button>
      </div>
      <div class="card-footer text-muted">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackLog',
  props: ['card'],

  methods: {
    setone: function(card) {
      this.$emit('setone', card)
    }
  }
}
</script>

<style lang="css">
</style>
