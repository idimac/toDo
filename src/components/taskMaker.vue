<template>
    <div class="task">
        <input class="completeButton" type="button" value="complete" @click="completeTask()">
        <p v-if="editNow == 'false'" class="taskText" v-bind:id="num" @click="editTask()">{{text}}</p>
        <input v-else type="text" class="editorInput" v-bind:id="'input' + num" v-bind:value = "text" @keypress="editOver($event)">
        <input class="toDoEditButton" v-bind:id="'button' + num" type="button" value="edit" @click="editTask()">
        <input class="toDoRemoveButton" type="button" value="remove" @click="deleteTask()"> 
    </div>
</template>

<script>
    export default {
        data () {
            return {
                editNow: 'false',
                completed: false
            }
        },
        props: ['text', 'num'],
        methods: {
            completeTask () {
                this.completed = !this.completed;
                if(this.completed == true) {
                    document.getElementById(this.num).style.color = "rgb(156, 193, 197)";
                    document.getElementById(this.num).style.textDecoration = "line-through"
                } else {
                    document.getElementById(this.num).style.color = "rgb(51, 60, 61)";
                    document.getElementById(this.num).style.textDecoration = "none"
                }
            },
            editTask ()  {
                if(this.editNow === 'true') {
                   this.editOver("manual"); //В чем проблема?
                }
                this.editNow = "true";
                document.getElementById('button' + this.num).value = "SAVE";
                document.getElementById('button' + this.num).style.color = "blue";
                let number = this.num
                setTimeout(() => {
                    document.getElementById('input' + this.num).focus()
                }, 10);  
            },
            editOver (e) {
                if(e.keyCode === 13 || e === "manual") {
                    this.editNow = "false"
                    this.$emit('reenter', this.num);
                    document.getElementById('button' + this.num).value = "edit";
                    document.getElementById('button' + this.num).style.color = "rgb(6, 185, 45)";
            }
            },
            deleteTask () {
                this.$emit('erase', this.num);
            }
        }
    }
</script>

<style scoped>
    input {
        margin: 5px;
    }
    .taskText {
        cursor: pointer;
        font-size:42px;
        float: left;
        margin: 2px 10px;
        color: rgb(51, 60, 61);
        transition: 1s;
    }
    .task {
        max-width: 100%;
        display: inline-block;
        border-radius: 20px;
        margin: 2px;
        background-color: rgb(161, 228, 240);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
</style>