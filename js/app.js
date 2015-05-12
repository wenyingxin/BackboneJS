
//Model
var Product = Backbone.Model.extend({

	default:{
		id:"",
		pic:"",
		title:"",
		price:"",


	},
	initialize:function(){
		console.log("a product is initialized!");

		this.on("change", function(model,options){
			console.log("more than one attribute has changed!");
		});
		this.on("change:title",function(model,options){
			console.log("title attribute has changed！");
		});
		this.on("invalid",function(model,error){
			console.log(error);
		});
	},
	validate:function(attributes,options){
		if(attributes.title.length <3){
			//console.log("title 长度不能小于3个字符");
			return "title 长度不能小于3个字符";
		}
	},

});


//console.log(product.attributes);
//console.log(product.toJSON());
//console.log(JSON.stringify(product));
//console.log("product.has('title') "+product.has('title'));
//console.log("product.get('title')："+product.get('title'));
//product.unset('title');
//product.set({anong_price:"$12.00",discount:"$10.00"});
//product.clear();
//product.set("title","ab",{validate:true});


//View
var ProductView = Backbone.View.extend({
	tagName:'li',
	className:'i_li left',
	attributes:{
		'data-role':'list'
	},
	template:_.template(jQuery('#list-template').html() ||""),
	render:function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

});


//Collection
var ProductCollection = Backbone.Collection.extend({
	model:Product,
	initialize:function(){
		this.on({
			'add':function(model,collection,options){
				console.log("ID:"+model.id+'模型添加到了集合里面');
			},
			'remove':function(model,collection,options){
				console.log("ID:"+model.id+'模型从集合里面删除掉了');
			},
			'change':function(model,options){
				console.log("集合的模型发生了变化");
			},
		});
	},
});

//Collection View
var ProductCollectionView = Backbone.View.extend({
	tagName:'ul',
	className:'i_ul rel',
	id:'hot_ul',

	initialize:function(){
		this.collection.on('add',this.addOne,this);
		this.render();
	},

	render:function(){
		this.collection.each(this.addOne,this);
		return this;
	},
	addOne:function(product){
		var productView =  new ProductView({model:product});
		this.$el.append(productView.render().el);
	}

});


//测试
var product1 = new Product({
	id:'ID1',
	pic:'../images/merchant/merchant-itemImg1.jpg',
	title:'李明家的自产红豆',
	price:'$7.5'
});
var product2 = new Product({
	id:'ID2',
	pic:'../images/merchant/merchant-itemImg1.jpg',
	title:'李明家的自产红豆',
	price:'$7.5'
});
var product3 = new Product({
	id:'ID3',
	pic:'../images/merchant/merchant-itemImg1.jpg',
	title:'李明家的自产红豆',
	price:'$7.5'
});



var productCollection = new ProductCollection([product1,product2,product3]);
var productCollectionView = new ProductCollectionView({collection:productCollection});

$(function(){

	$("#product_list").html(productCollectionView.el);
});