<template>
  <div class="creatingZone">
    <p class="toDoInstructions">Write your task at this field, then click "Create"</p>
    <input class="toDoInput" type="text" size="35" v-on:keydown="emitCreate($event)" v-model="text">
    <input class="toDoCreateButton" type="button" value="Create" @click="pushTask()" @mousedown="pushedButton($event)" @mouseup="pushedButton($event)">
    <hr>
    <div class="tasks">
      <ol>
        <li class="taskList" v-for="(key, i) in writedTasks"><maker :text="key" :num="i" v-on:erase="deleteItem"  v-on:reenter="reenterItem"></maker></li>
      </ol>
    </div>
</div>
</template>

<script>
  import maker from "./taskMaker.vue";
  export default {
      name: 'toDo',
      data () {
        return {
          text: '',
          msg: 'Welcome to Your Vue.js App',
          writedTasks: JSON.parse(localStorage.getItem('myToDo')) || []
        }
      },
      methods: {
        emitCreate(e) {
          if(e.keyCode === 13) {
            this.pushTask();
          }
        },
        pushedButton (event) {
          if (event.type === "mousedown") {
            event.target.classList.add('some');
          }
          if ((event.type === "mouseup" && event.target.classList.contains('some'))){
            event.target.classList.remove('some');
          }
        },
        pushTask () {
          if (!(this.text === '')) {
            this.writedTasks.push(this.text);
            localStorage.setItem('myToDo', JSON.stringify(this.writedTasks));
            this.text = '';
          }
        },
        deleteItem(num) {
          this.writedTasks.splice(num, 1);
        },
        reenterItem(num) {
          this.writedTasks.splice(num, 1, document.getElementsByClassName('editorInput')[0].value)   
        }
      },
      components: {
        'maker': maker
      },
  }
</script>

<style>
  .creatingZone {
    padding: 0;
    background-color: rgb(201, 233, 248);
    position: absolute;
    width: 100%;
    min-height: 100vh;
    top: 85px;
    border-radius: 40px;
    text-align: center;
  }
  .toDoInstructions {
    font: 28px Arial;
    color: rgb(54, 62, 63);
  }
  .toDoInput {
    outline: none;
    background-color:rgb(161, 228, 240);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border: none;
    font: 22px Arial;
    color: rgb(204, 163, 30);
  }
  .toDoCreateButton, .toDoEditButton, .toDoRemoveButton {
    cursor: pointer;
    margin-left: 10px;
    height: 50px;
    width: 60px;
    outline: none;
    border: none;
    border-radius: 40px;
    background-color: rgb(161, 228, 240);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  .completeButton {
    cursor: pointer;
    margin-left: 10px;
    height: 20px;
    width: 60px;
    outline: none;
    border: none;
    border-radius: 40px;
    background-color: rgb(161, 228, 240);
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  .toDoCreateButton {
    color: rgb(6, 185, 45);
  }
  .toDoRemoveButton {
    color: red;
  }
  .toDoEditButton {
    color: rgb(7, 133, 60);
  }

  .buttons {
    height: 8%;
    width: 100%;
  
  }
  .some {
    background-color: orange;
  }
  .tasks {
    text-align: center;
    top: 230px;
    width: 100%;
  }
  .taskList {
    list-style-position:inside;
  }
  .editorInput {
    float: left;
    background-color:rgb(161, 228, 240);
    outline: none;
    border-radius: 20px;
    border: none;
    color:rgb(126, 132, 133);
    font-size: 42px;
    margin-left: 5px;
    width: 300px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
  }
</style>
