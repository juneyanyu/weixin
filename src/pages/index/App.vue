<template>
  <div id="search">
    <label for="">
      <input type="text" name="" value="" v-model="code" placeholder="请输入单号">
      <i class="clearinput" v-if="code.length>0" @click="clearinput"></i>
    </label>
    <label for="" v-if="iskehu" >
      <input type="text" name="" value="" placeholder="请输入客户编号" v-model="cuscode">
      <i class="clearinput" v-if="code.length>0"></i>
    </label>
    
    <input type="button" name=""  value="查询" id="submit" :class='[{"disabled":disabled},"btn"]'  :disabled="disabled" @click="submit()">
    <dl>
      <dt>历史记录</dt>
      <dd v-for="(el,index) in historylist">{{el}}</dd>
    </dl>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui';
export default {
  name: 'app',
  data () {
    return {
      code:'',//单号
      iskehu:false,//是否显示客户单号
      disabled:true,//当前可提交状态
      historylist:[],
      cuscode:''
    }
  },
  watch: {
    code:function(){
       this.code=this.code.replace(/[\W]/g,'');
      let d=/^[d]/,w=/^[wsh]/,dw=/^[d|w]/;//不是D.W开头时，进行校验客户单号，
      if(d.test(this.code)&&this.code.length==13 || w.test(this.code)&&this.code.length==15 || (!dw.test(this.code)&&this.code.length>0)){
        this.disabled=false
      }else{
         this.disabled=true;
      }
    }
  },
  methods: {
    submit: function(){
        let _self=this,condition;
        if(_self.iskehu){
           condition={
            seat: this.code,
            consignerCode:this.cuscode
          }
        }else{
          condition={
            seat: this.code
          }
        }
        // _self.$router.push({
        //         path: '/details',
        //         name: 'Details',
        //         params:{
        //           id:132123
        //         }
        //       })
        axios.get('/tmsWx/route/list.do',{params:{condition}})
          .then(function (response) {
             
            if(response.data.errorCode=='5020'){
              Toast({
                message: response.data.errorMsg,
                position: 'top',
                duration: 2000
              });
              _self.iskehu=true;
              
               console.log(response);
            }else{
               this.historylist.unshift(this.code)
              if(this.historylist.length>=5){
                this.historylist.splice(5)
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    clearinput: function(){
      this.code=''
    }
  }

}



</script>

<style lang="css" scoped>
#search{
  padding:1.2rem .2rem .2rem;
}
input{
  width: 100%;
  height: 1.05rem;
  display: block;
  margin: 0 auto .4rem auto;
  border: none;
  line-height: .7rem;
  font-size: 16px;
}
input[type='text']{
  border: 1px solid #d2d2d2;
  padding: 0.2rem;
  
}

label{
  position: relative;
  width: 100%;
  display: block
}
.clearinput{
  display: block;
  width: .42rem;
  height: 100%;
  position: absolute;
  right: .2rem;
  top:0;
  background: url('./assets/clear.png') no-repeat center right;
  -webkit-background-size:100% auto;
  background-size:100% auto;
}
#submit{
  background: #03a9f4;
  color: #fff;
  text-align: center
}
#submit.disabled{
  background: #f5f6f6;
  color: #b4b4b4
}
dl{
  font-size: 14px;
  color: #999
}
</style>