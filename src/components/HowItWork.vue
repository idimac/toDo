<template>
    <div class="wrapForMessage">
        <h3> {{ msg1 }} </h3>
        <h4> {{ msg2 }} </h4>
        <h5> {{ msg3 }} </h5>
    </div>
</template>

<script>
export default {
  name: "HowItWork",
  data () {
    return {
      msg1: 'Welcome to my app. If you want to make a note - enter text to text-area and click "create"',
      msg2: 'if you need to edit note - select note from list and press "edit"',
      msg3: 'When you want remove note - select note from list and click "remove"'
    }
  }
}
</script>

<style scoped>
.wrapForMessage {
  text-align: center;
  position: absolute;
  top: 85px;
  height: 80vh;
  width: 100vw;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  padding: 10px;
}
h3 {
  border-radius: 50px;
  font-weight: normal;
  color: rgb(80, 79, 90);
}
h4 {
  border-radius: 50px;
  font-weight: normal;
  color: rgb(80, 79, 90);
}
h5 {
  border-radius: 50px;
  font-weight: normal;
  color: rgb(80, 79, 90);
}
</style>
