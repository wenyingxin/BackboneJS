/**
 *DATE : 2013.10.24
 *
 *自定义添加验证方法
 *
 **/
$(document).ready(function() {
	try{
		//手机号码验证
		
		if(jQuery.validator.methods["isPhoneNumber"] === undefined){
			jQuery.validator.addMethod("isPhoneNumber",function(value,element){
			    var length = value.trim != undefined ? value.trim().length : value.length;
			    var mobile = /^\s*(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})\s*$/;
			    return this.optional(element)||(length == 11 &&mobile.test(value));

			},"手机号码格式错误");
		}

		//身份证号码验证
		if(jQuery.validator.methods["isIDCardNumber"] === undefined){
			jQuery.validator.addMethod("isIDCardNumber",function(value,element){
			    return this.optional(element) || checkIdCardNo(value);

			},"请正确输入您的身份证号码");
		}
		 
		//用户名验证-只允许a-z，A-Z及数字
		if(jQuery.validator.methods["isUserName"] === undefined){
			jQuery.validator.addMethod("isUserName",function(value,element){
			     var userName = /^\s*([a-zA-Z][a-zA-Z0-9]+)\s*$/;
			     return this.optional(element)||(userName.test(value));

			},"用户名只允许数字和字母且字母开头");
		}
		
		//日期验证
		if(jQuery.validator.methods["isDate"] === undefined){
			jQuery.validator.addMethod("isDate",function(value,element){
				return ibank.isDate(value);
			},"请正确输入日期");
		}
		
		//日期验证
		if(jQuery.validator.methods["isFloat"] === undefined){
			jQuery.validator.addMethod("isFloat",function(value,element){
				return ibank.isFloat(value);
			},"请输入正确的金额");
		}
		
		//密码验证-只允许a-z，A-Z及数字，特殊符号-_!@#$%^&*
		if(jQuery.validator.methods["isPwd"] === undefined){
			jQuery.validator.addMethod("isPwd",function(value,element){
			     var pwd = /^\s*[0-9a-zA-Z-_!@#$%^&*]*\s*$/;
			     return this.optional(element)||(pwd.test(value));

			},"密码只允许数字字母和特殊符号");
		}
		
		//数字
		if(jQuery.validator.methods["isNum"] === undefined){
			jQuery.validator.addMethod("isNum",function(value,element){
			     var pwd = /^-?\d+(\.\d+)?$/;
			     return this.optional(element)||(pwd.test(value));

			},"只允许是数字");
		}
		//邮箱
		if(jQuery.validator.methods["isEmail"] === undefined){
			jQuery.validator.addMethod("isEmail",function(value,element){
			     var pwd = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			     return this.optional(element)||(pwd.test(value));

			},"请输入正确的邮箱地址");
		}
		//邮编
		if(jQuery.validator.methods["isPostCode"] === undefined){
			jQuery.validator.addMethod("isPostCode",function(value,element){
			     var pwd = /^[0-9]{6}$/;
			     return this.optional(element)||(pwd.test(value));
			},"请输入正确的邮编");
		}
		
		//用户名验证不能与虚拟帐号规则相同
		if(jQuery.validator.methods["isExcludeAcctNo"] === undefined){
			jQuery.validator.addMethod("isExcludeAcctNo",function(value,element){
			     var userName = /^([0-9A-Z]{5})([0]{1}|[1]{1})(01)([\\d]{10})$/;
			     return this.optional(element)||(!userName.test(value));
			},"该用户名不符合命名规则");
		}
		
		//注册行内邮箱的时候，检查邮箱的名称是否合规
		jQuery.validator.addMethod("isEmailName",function(value,element){
		    var emailName = /^\s*([a-zA-Z0-9]+)\s*$/;
		    return this.optional(element)||(emailName.test(value));

		},"邮箱名只允许数字和字母");
		
		//绑定和重新绑定邮箱的时候，检查邮箱时候合规
		jQuery.validator.addMethod("isValidateEmail",function(value,element){
			
			var reg =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,}){1,2})$/;
			
			return reg.test($.trim(value));

		},"邮箱格式错误");
	
	}catch(e){
		
	}
	
});



