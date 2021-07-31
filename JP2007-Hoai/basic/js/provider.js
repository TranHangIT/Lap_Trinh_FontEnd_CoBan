// Xử lý kịch bản cho provider.html - provider.js

function checkValidProvider(fn){
	//Lấy giá trị
	var name = document.getElementById("txtName").value; 
	var check = document.getElementById("chkAgree").checked;
	
	//Tham chiếu đối tượng nút bấm 
	var btnReg= document.getElementById("btnReg");
	
	//Tham chiếu đến đối tượng báo lỗi
	var viewError=document.getElementById("viewError");
	
	
	
	if((name.trim() != "") && check){
		btnReg.disabled = false;
	}else{
		btnReg.disabled = true;
		
		if(name.trim()==""){
			viewError.innerHTML = "***Thiếu tên nhà cung cấp ";
			viewError.style.color= "red";
		}else{
			viewError.innerHTML ="<i class=\"fas fa-check\"></i>";
			viewError.style.color= "blue";
		}
	}
}
//tự làm nếu không đúng thì xóa đi và xóa cả onblur ở trong dòng 58  provider.html
// function kiemtra(fn){
	// var name = document.getElementById("txtName").value;
	
	// if(name.trim()==""){
		// viewError.innerHTML = "***Thiếu tên nhà cung cấp ";
		// viewError.style.color= "red";
		// document.getElementById("txtName").focus();
	// }else{
		// viewError.innerHTML ="<i class=\"fas fa-check\"></i>";
		// viewError.style.color= "blue";
	// }

// }