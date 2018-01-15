<template>
	<div class="detailscon">
		<h4>订单号：123123123</h4>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="text">文字轨迹</mt-tab-item>
		  <mt-tab-item id="map">地图轨迹</mt-tab-item>
		</mt-navbar>
<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="text">rwrwerwer
		    <mt-swipe :auto="0">
			  <mt-swipe-item>1</mt-swipe-item>
			  <mt-swipe-item>2</mt-swipe-item>
			  <mt-swipe-item>3</mt-swipe-item>
			</mt-swipe>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="map">
		   4444
		  </mt-tab-container-item>
	    </mt-tab-container>
	</div>
</template>

<script>
// import BMap from 'BMap'  
export default {

  name: 'detailstmp',

  data () {
    return {
    	selected:'text'
    }
  }
}
</script>

<style lang="css">
h4{
	height: 1rem;
	padding:0 .2rem;
	border-bottom: 1px solid #d0d0d0;
	margin-bottom: .09rem;
	line-height: 1rem;
	font-size: 14px;
	font-weight: normal
}
.mint-navbar{
	border-bottom: 1px solid #d0d0d0;
	border-top: 1px solid #d0d0d0;
	height: .8rem;
	line-height: .8rem;
}
.mint-navbar .mint-tab-item.is-selected{
	background: #02a8f3;
	color: #fff;
	border: none;
	margin-bottom: 0
}
.mint-tab-item-label{
	font-size: 14px;
	line-height: .8rem;
}
.mint-navbar .mint-tab-item{
	padding: 0;
}
.mint-tab-container-item{
	height: 100px
}

</style>