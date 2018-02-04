<template>
    <div class="header">
        <h1 class="logoName"> {{ header }}</h1>
        <input class="HowItWorkButton" type="button" value="How It Work" @click="goToHow($event)">
    </div>
</template>

<script>
    export default ({
        name: "header",
        methods: {
            goToHow (event) {
                if(this.$router.history.current.path == '/') {
                      this.$router.push('./how');
                      event.target.value = "Main";
                } else {
                    this.$router.push('/');
                    event.target.value = "How It Work";
                }
            }      
        },
            data () {
                return {
                    header: "ToDoList"
                }
            }
    })
</script>

<style scoped>
    .header {
        border-radius: 30px;
        position: fixed;
        top: 0;
        left: 0;
        height: 80px;
        width: 100vw;
        background-color: rgb(161, 228, 240);
    }
    .logoName {
        margin-left: 20px;
        float: left;
    }
    .HowItWorkButton {
        cursor: pointer;
        height: 30px;
        outline: none;
        border: none;
        border-radius: 25x;
        position: absolute;
        top: 35%;
        left: 200px;
        background-color: rgb(161, 228, 240);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
</style>