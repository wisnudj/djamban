<template>
  <div class="">
    <HeaderMain></HeaderMain>
    <div class="container-fluid">
      <CardTitle></CardTitle>
      <div class="row">
        <div class="col-md-3 spasi">
          <BackLog v-for="(card, index) in board" :key="index" :card="card" :index="index"></BackLog>
        </div>
        <div class="col-md-3 spasi">
          <Todo v-for="(card, index) in board" :key="index" :card="card" :index="index"></Todo>
        </div>
        <div class="col-md-3 spasi">
          <Doing v-for="(card, index) in board" :key="index" :card="card" :index="index"></Doing>
        </div>
        <div class="col-md-3 spasi">
          <Done v-for="(card, index) in board" :key="index" :card="card" :index="index"></Done>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">new task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="createCard">
              <fieldset>
                <div class="form-group">
                  <label for="titleinput">Title</label>
                  <input type="text" class="form-control" id="titleinput" aria-describedby="emailHelp" placeholder="Masukkan title task" v-model="newCard.title">
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="descriptioninput">description</label>
                  <textarea class="form-control" id="descriptioninput" rows="3" placeholder="description task" v-model="newCard.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="pointinput">Point</label>
                  <input type="text" class="form-control" id="pointinput" aria-describedby="emailHelp" v-model="newCard.point">
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="assignto">assigned to</label>
                  <input type="text" class="form-control" id="assignto" aria-describedby="emailHelp" placeholder="assigned to" v-model="newCard.assignto">
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
              </fieldset>
              <input type="submit" class="btn btn-info" value="Create"></input>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="detailmodal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detail Task boker for adi</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5>Task Description :</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>Point:</h5>
            <p>50</p>
            <h5>Status:</h5>
            <p>Backlog</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary">Backlog</button>
            <button type="button" class="btn btn-secondary">Delete</button>
            <button type="button" class="btn btn-secondary">To-do</button>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import {boardRef} from '../firebase'
import HeaderMain from './HeaderMain'
import CardTitle from './CardTitle'
import BackLog from './BackLog'
import Todo from './Todo'
import Doing from './Doing'
import Done from './Done'
export default {
  name: 'main',
  components: {
    HeaderMain,
    CardTitle,
    BackLog,
    Todo,
    Doing,
    Done
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newCard: {
        title: '',
        description: '',
        point: 0,
        assignto: '',
        status: 'Todo',
        createdAt: Date.now()
      }
    }
  },

  firebase: {
    board: boardRef
  },

  methods: {
    createCard: function() {
      boardRef.push({
        title: this.newCard.title,
        description: this.newCard.description,
        point: this.newCard.point,
        assignto: this.newCard.assignto,
        status: this.newCard.status,
        createdAt: this.newCard.createdAt
      })
      this.newCard.title = ''
      this.newCard.description = ''
      this.newCard.point = ''
      this.newCard.assignto = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.spasi {
  padding-top: 18px;
  padding-bottom: 14px;
}

.card-space {
  margin-bottom: 18px;
}

.card-title {
  font-size: 24px;
}

.navbar-brand {
  font-size: 20px;
}

.djamban {
  margin-top: 4px;
}
</style>
