/**
 *  用户Login
 */
$(document).ready(function() {
	// 1 Binding
	validate();
	// 2 Click event
	$('#loginBtn').bind('click', function() {
		// 3 Verify input data
		if(!$("#loginForm").valid()){
			return;
		}
		// 4 submit form
		$('#loginForm').submit();
		
	});
});

/**
 *  Validate Function
 */
function validate() {
	//设置验证规则
	var opts = {
		rules : {
			account : {
				required : true,
				isPhoneNumber : true
			},
			passwd : {
				required : true,
				rangelength : [ 6, 16 ]
			},
		},
		messages : {
			account : {
				required : "请输入手机号",
			},
			passwd : {
				required : "请输入密码",
				rangelength : jQuery.format("密码必须为{0}至{1}位字符")
			},
		},
		errorPlacement : function(error, element, dom) {
			//alert(error[0].childNodes[0].data);
			//$('#loginErrorNotice').text(error[0].childNodes[0].data);
			//error.appendTo($('#loginErrorNotice'));
			//error.appendTo($('.alert'));
			//$(".alert").slideDown();
		}
	};

	$("#loginForm").validate(opts);
	
};