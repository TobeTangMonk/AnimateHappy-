/*<!-- 引入Vue.js -->
	<!-- Vue面向对象的方式前端的框架 -->

	<!-- 搭建脚手架 -->*/


/*	<!-- 使用Vue进行表格的增删改查 -->*/
/*vm = new Vue({
el:"#app",
data: {

　　methods:{},

　　watch:{},

　　filters:{},
el:设置vue可以操作的html内容范围，值就是css的id选择器。

data: 保存vue.js中要显示到html页面的数据。

methods:定义函数。

watch:监听属性

filters:定义过滤器。*/

window.onload=function(){

  new Vue({
  

    el:"#table",
    data:{ //数据
  obj{


   title:'',
   user:'',
   dates:''

  },

    lists:[{title:'标题',user:'用户',dates:'2020-11-26'}








   	],



   },

   methods:{
  add:function(){
  	// lists 数组名 this.lists.push()函数信数组中加入titile,user,dates,
  	this.lists.push(){
  		title:this.obj.title,
  		user:this.obj.user,
  		dates:this.dates,
    };
    /*删除列表的方法*/

    delete:function(index){
//index表示删除的位置 1对应的个数
       this.lists.splice(index,1);





    },
         





  }



}







  })




}