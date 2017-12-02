<template lang="html">
  <div class="row">
    <div class="col-md-3 spasi">
      <div class="card text-white bg-danger">
        <div class="card-body">
          <h5>Backlog</h5>
        </div>
      </div>
    </div>
    <div class="col-md-3 spasi">
      <div class="card text-white bg-warning">
        <div class="card-body">
          <h5>To-Do</h5>
        </div>
      </div>
    </div>
    <div class="col-md-3 spasi">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <h5>Doing</h5>
        </div>
      </div>
    </div>
    <div class="col-md-3 spasi">
      <div class="card text-white bg-success">
        <div class="card-body">
          <h5>Done</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTitle'
}
</script>

<style lang="css">
</style>
