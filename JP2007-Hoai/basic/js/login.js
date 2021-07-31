//Xử lý kịch bản cho login.html (phiên bản table)- login.js

function checkValidLogin(fn){
	//Lấy thông tin trên giao diện
	var name=fn.txtUserName.value;
	var pass=fn.txtUserPass.value;
	
	//các biến các nhậ sự hợp lệ của dữ liệu
	var validName = true;
	var validPass = true;
	
	//Biến ghi nhậ thông báo 
	var message = "";
	
	//Kiểm tra name
	name = name.trim();
	if(name==""){
		message = "Thiếu thông tin tài khoản vào hệ thống.";
		validName = false;
	}else{
		if((name.length<5)||(name.length>50)){
			message = "Độ dài của tên đăng nhập không hợp lệ!";
			validName = false;
		}else{
			if(name.indexOf(" ") !=-1){
				message= "Tên đăng nhập không được có dấu cách !" ;
				validName= false;	
			}else{
				if(name.indexOf("@") !=-1){
					var parttern = /\w+@\w+[.]+\w/;
					if(!name.match(parttern)){
						message = " Không đúng cấu trúc hộp thư";
						validName=false;
					}
				}
			}

		}
	}
	
	//Kiểm tra pass
	pass = pass.trim();
	if(pass==""){
		message += " \n Thiếu mật khẩu vào hệ thống ";
		validPass = false;
	}else{
		if(pass.length<6){
			message += "\nMật khẩu không hợp lệ ";
			validPass = false;
		}
	}
	
	//Kiểm tra trạng thái khi lưu thong tin đăng nhập
	if(document.getElementById("chkSave").checked){
		message +="\n Đây có phải là máy tính của riêng bạn hay không?";
	}
	
	//Xuất thông báo
	if(message !=""){
		window.alert(message);
		
		if(!validName){
			fn.txtUserName.focus();
			fn.txtUserName.select();
		}else if(!validPass){
			fn.txtUserPass.focus();
			fn.txtUserPass.select();
		}
	}
	return validName && validPass;
}