<template>
  <div class="">
    <HeaderMain></HeaderMain>
    <div class="container-fluid">
      <CardTitle></CardTitle>
      <div class="row">
        <div class="col-md-3 spasi">
          <BackLog v-for="(card, index) in board" :key="index" :card="card" :index="index" @setone="showdetail"></BackLog>
        </div>
        <div class="col-md-3 spasi">
          <Todo v-for="(card, index) in board" :key="index" :card="card" :index="index" @setone="showdetail"></Todo>
        </div>
        <div class="col-md-3 spasi">
          <Doing v-for="(card, index) in board" :key="index" :card="card" :index="index" @setone="showdetail"></Doing>
        </div>
        <div class="col-md-3 spasi">
          <Done v-for="(card, index) in board" :key="index" :card="card" :index="index" @setone="showdetail"></Done>
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
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info" v-on:click="createCard" data-dismiss="modal">Create</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="detailmodal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Detail Task {{oneCard.title}} for {{oneCard.assignto}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h5>Task Description :</h5>
            <p>{{oneCard.description}}</p>
            <h5>Point:</h5>
            <p>{{oneCard.point}}</p>
            <h5>Status:</h5>
            <div class="form-group">
              <select class="form-control" id="exampleSelect1" v-model="oneCard.status">
                <option value="BackLog">BackLog</option>
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" v-on:click="deleteCard(oneCard)" data-dismiss="modal">Delete</button>
            <button type="button" class="btn btn-secondary" v-on:click="updateStatus(oneCard)" data-dismiss="modal">Save</button>
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
        status: 'BackLog',
        createdAt: Date.now()
      },

      oneCard: {
        key: '',
        title: '',
        description: '',
        point: 0,
        assignto: '',
        status: '',
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
    },

    showdetail: function(card) {
      this.oneCard.key = card['.key']
      this.oneCard.title = card.title
      this.oneCard.description = card.description
      this.oneCard.point = card.point
      this.oneCard.assignto = card.assignto
      this.oneCard.status = card.status
      this.oneCard.createdAt = card.createdAt
    },

    updateStatus: function(card) {
      boardRef.child(card.key).update({status: card.status})
      // console.log(card.status);
    },

    deleteCard: function(card) {
      boardRef.child(card.key).remove()
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
