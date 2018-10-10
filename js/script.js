Vue.component('attr', {
    props:['todo','mo'],
    template: `
    <table class="table">
	  <tbody>
	    <tr>
	    	<td>{{mo+1}}</td>
	      	<td>{{todo.title}}</td>
	      	<td>{{todo.name}}</td>
	      	<td>{{todo.label}}</td>
	      	<td>{{createDate}}</td>
	      	<td><button>修改</button> <button @click="del">删除</button></td>
	    </tr>
	  </tbody>
	 </table>
    `,
    methods:{
    	del:function(){
        	app.arrs.splice(this._uid - 1, 1);
        	localStorage.setItem('arrs', JSON.stringify(app.arrs))
       	}
    },
    computed:{
        getDate: function () {
            return Date.parse(new Date());
        },
        createDate: function () {
            return moment(this.todo.time).fromNow();
        },
        
    }
});
var app = new Vue({
    el:'#app',
    data:{
        arrs: [
	       	{
	            "title": '最新新闻1',
	            "name":'作者1',
	            "label":"新闻",
	            "content": '重温《我的少女时代》，满足了我对青春的全部幻想'
	       	},
	       	{
	            "title": '最新新闻2',
	            "name":'作者2',
	            "label":"教育",
	            "content": '重温《我的少女时代》，满足了我对青春的全部幻想'
	       	},
	       	{
	            "title": '最新新闻3',
	            "name":'作者3',
	            "label":"娱乐",
	            "content": '重温《我的少女时代》，满足了我对青春的全部幻想'
	       	}
        ]
    },
    methods:{
    	btn:function(){
    		document.getElementsByClassName("box")[0].style.display = "block";
    	},
    	ton:function(){
    		document.getElementsByClassName("box")[0].style.display = "none";
    	},
    	but:function(){
    		this.arrs.push({"title":this.tit,
    		"name":this.nam,
    		"label":this.val,
    		"context":this.cont})
    		localStorage.setItem('arrs', JSON.stringify(app.arrs));
    		document.getElementsByClassName("box")[0].style.display = "none";
    		this.tit="",
    		this.nam="",
    		this.label="",
    		this.cont=""
    	}
    },
    created:function(){
        if (localStorage.getItem('arrs') !== null) {
            this.arrs = JSON.parse(localStorage.getItem('arrs'));
        }
    }
});