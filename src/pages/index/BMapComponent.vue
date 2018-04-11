<template>
	 <baidu-map class="map" :center="center" :zoom="zoom"  NavigationControlType="BMAP_NAVIGATION_CONTROL_LARGE">
      <bm-marker :position="{lng: 116.404, lat: 39.915}" >
        <!-- <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/> -->
      </bm-marker>
    </baidu-map>
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '8PIUEeHbipfeb3UXD95fNF9RWsb1NrPZ',
})

export default {
  name:'BMapComponent',
  data () {
    return {
      center: {lng: 116.404, lat: 39.915},
      zoom: 5
    }
  }
 
}
</script>

<style lang="css" scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>