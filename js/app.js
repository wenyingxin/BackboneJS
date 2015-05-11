
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

var productView = new ProductView({
	model:product1
});

//Collection
var ProductCollection = Backbone.Collection.extend({
	model:Product
});

var productCollection = new ProductCollection([product1,product2,product3]);