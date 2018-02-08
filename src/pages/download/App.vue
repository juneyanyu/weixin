<template>
	<div class="wrap">
		<a href="http://2bai.co/18716639" class="btn"><img src="./assets/btn.png" alt=""></a>
	</div>
</template>

<script>
export default {

  name: 'App',

  data () {
    return {
    }
  }
}
</script>

<style lang="css">
html,body,.wrap{
	width: 100%;
	height: 100%;
	background: #03a9f4
}
.wrap{
	background: url('assets/down.png') no-repeat center top;
	background-size: 100% auto;
	-webkit-background-size: 100% auto;
	max-width: 750px;
	margin: 0 auto;	
	position: relative;
	display: flex;
	justify-content: center;
}
.btn{
	position: absolute;
	bottom:16%;
	width: 52%;

}
.btn img{
	width: 100%
}
</style>