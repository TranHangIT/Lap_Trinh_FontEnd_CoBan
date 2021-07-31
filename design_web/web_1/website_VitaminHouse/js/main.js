//Các xử lý kịch bản cho index.html - main.js


//Khai báo biến global 
var  def="----Từ Khóa----";
var emp="";

function setFirstTime(fn ){
	// Tham chiếu đối tượng nhập từ khóa-------
	//window.document.frmSearch.txtKeyword.value=def;
	//var fn=window.document.frmSearch;//hoặc là fn=window.document.form[1];(vì nó là form thứ 2)
	fn.txtKeyword.value=def;
}

function setKeyword(fn, isClick){
	//Lấy ra giá trị của từ khóa, 
	var value=fn.txtKeyword.value;
	
	if(isClick){
		//khi kích chuột vào
		if(value.trim()==def){
			fn.txtKeyword.value = emp;
			
		}
	}else{
		//Khi thoát chuột ra
		if(value.trim()==emp){
			fn.txtKeyword.value=def;
		}
	}
}

function checkValiKeyword(fn){
	var value=fn.txtKeyword.value;
	
	value = value.trim();
	
	if((value==def) || (value ==emp)){
		var message= "Hãy nhập vào từ khóa tìm kiếm " ;
		window.alert(message);
		fn.txtKeyword.focus();
		fn.txtKeyword.select();
		return false;
	}
	return true;
}