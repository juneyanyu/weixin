<template>
	<div class="detailscon">
    <div style="background: #eeeeee;padding-bottom: .09rem">
      <h4 style="font-size: 20px">{{codety}}：{{code}}</h4>
    </div>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="text">文字轨迹</mt-tab-item>
		  <mt-tab-item id="map">地图轨迹</mt-tab-item>
		</mt-navbar>
<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="text">
		 	 <div class="nav">
		      <mt-button size="small" v-if="rr.length>1"  v-for="(value,index) of rr" @click.native.prevent="active= 'tab-container'+index" :class="{'tab':tab[index]}">{{index+1}}</mt-button>
		     </div>
		     <div class="page-tab-container" >
		      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
		        <mt-tab-container-item :id="'tab-container'+index" v-for="(value,index) of rr">
		            <!-- cell组件 -->
	             <mt-cell v-for="(key,i) of value"><div class="listbar">{{key.routeDetail}}<br><span class="f15">{{key.createTime}}</span></div></mt-cell>
		        </mt-tab-container-item>
		      </mt-tab-container>
		    </div>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="map">
        <div v-if="uu">
          <ul class="nav">
            <li v-for="(item,t) of arrpoint"  class="mint-button--default mint-button mint-button--small" @click.native.prevent="on= 'tab'+t" :class="{'tab':tab[t]}">{{t+1}}</li>
          </ul>
          <baidu-map class="map" :center="center" :zoom="6"  NavigationControlType="BMAP_NAVIGATION_CONTROL_LARGE">
            <bm-marker :position="point" >
            </bm-marker>
          </baidu-map>
        </div>
		  </mt-tab-container-item>
	    </mt-tab-container>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '8PIUEeHbipfeb3UXD95fNF9RWsb1NrPZ',
})

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
      center:{lng: 116.404, lat: 39.915},
      uu:false,
      point:{lng: 0, lat: 0},
      arrpoint:[],
      on:'tab0',
      tob:[true]
    }
  },
  watch:{
  	selected:function(){
      this.uu=(this.selected=='map' ? true :false)
      this.$jsonp('http://yingyan.baidu.com/api/v3/track/getlatestpoint',
      {
      　　 ak:'8PIUEeHbipfeb3UXD95fNF9RWsb1NrPZ',
            service_id:'156446',
        // entity_name:'868756025367333',
            entity_name:'F201800000247'
      } 
      ).then(json => {
        this.point.lng=json.latest_point.longitude;
        this.point.lat=json.latest_point.latitude;
      　　// 返回数据 json， 返回的数据就是json格式
      // console.log(this.point)
      }).catch(err => {
      　　console.log(err)
      })
  	},
    active:function(v){
      for(var i=0;i<this.rr.length;i++){
        if(v.indexOf(i)>-1){
          this.tab[i]=true
        }else{
          this.tab[i]=false
        }
      }
    },
    on:function(o){
      for(var i=0;i<this.arrpoint.length;i++){
        if(o.index(i)>-1){
          this.tab[i]=true
        }else{
          this.tab[i]=false
        }
      }
    }
  },
  mounted(){
  	const data=(sessionStorage.infoms ? JSON.parse(sessionStorage.infoms) : '');
  		this.rr=data.body;
    	this.codety=data.ordertype;
    	this.code=data.orderNumber;
      const _self=this;
      this.rr.forEach(function(v,i){
         v.forEach(function(t,r){
            if(t.transportId){
              _self.arrpoint.push(t.transportId)
            }
         })
      })
      this.arrpoint=Array.from(new Set(this.arrpoint))//去重
      console.log(Array.from(new Set(this.arrpoint)))
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

<style lang="css" >
@import "/assets/details.css";
.map {
  width: 100%;
  height: 500px;
}
.nav li{line-height: 1rem}
</style>