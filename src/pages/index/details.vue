<template>
	<div class="detailscon">
		<h4>{{codety}}：{{code}}</h4>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="text">文字轨迹</mt-tab-item>
		  <mt-tab-item id="map">地图轨迹</mt-tab-item>
		</mt-navbar>
<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="text">
		 	 <div class="nav">
		      <mt-button size="small"  v-for="(value,index) of rr" @click.native.prevent="activetab(index)" :class="{'tab':tab[index]}">{{index+1}}</mt-button>
		     </div>
		     <div class="page-tab-container" >
		      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
		        <mt-tab-container-item :id="'tab-container'+index" v-for="(value,index) of rr">
		            <!-- cell组件 -->
	             <mt-cell v-for="(key,i) of value"><div class="listbar">{{key.routeDetail}}<br><span class="f14">{{key.createTime}}</span></div></mt-cell>
		        </mt-tab-container-item>
		     
		      </mt-tab-container>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="map">
		 	asd
		  </mt-tab-container-item>
	    </mt-tab-container>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {

  name: 'detailstmp',

  data () {
    return {
    	selected:'text',
    	rr:'',
    	codety:'',
    	code:'',
    	contents:'',
    	active:'tab-container0',
    	none:false,
    	tab:[true],

    }
  },
  watch:{
  	selected:function(){
  		this.selected='text'
  		Toast({
                message: '暂未开放！',
                position: 'top',
                duration: 2000
              });
  	}
  },
  mounted(){
  	const data=(sessionStorage.infoms ? JSON.parse(sessionStorage.infoms) : '');
  		this.rr=data.body;
    	this.codety=data.ordertype;
    	this.code=data.orderNumber;
  },
  methods:{
  	activetab:function(n){
  		this.active='tab-container'+n;
  		for(var i=0;i<this.rr.length;i++){
			if(i==n){
				this.tab[n]=true
			}else{
				this.tab[i]=false
			}
  		}

  	}
  }
}
</script>

<style>
@import "/assets/details.css";

</style>