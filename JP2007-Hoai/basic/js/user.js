// xử lý kịch bản cho user.html - user.js
function generatePermis(){
	//Khai báo mảng các quyền thực thi
	
	// cách 1
	var permis= new Array();
	permis[0]= "-----chon---------";
	permis[1]= "Thành viên (members)";
	permis[2]= "Tác giả (authors)";
	permis[3]= "Guản lý ( managers)";
	permis[4]= "Quản trị (administrator)";
	permis[5]= "Quản trị cao cấp (supers)";
	
	//cách 2:
	var permis2 = new Array("----chọn-----", "Thành viên", permis[2], "", "","");
	
	//cách 3:
	var permis3 = ["----chọn-----", "Thành viên", permis[2], "", "",""];
	
	//Duyệt mảng để tạo cấu trúc option 
	var opt= "<select class=\"form-control\" id=\"slcPermis\">";
	for(var i=0; i<permis.length; i++){
		opt+= "<option value= \""+i+"\" >";
		opt+= permis[i];
		opt+= "</option>";
	}
	opt+= "</select>";
	
	//Xuất cấu trúc ra màn hình
	document.write(opt);
	
	
}

//---------------------------------------
function viewOption(element, index, array){
	document.write("<option value=\""+index+"\">"+element+"</option>");
}

function generatePermis2(){
	//Khai báo mảng các quyền thực thi
	
	// cách 1
	var permis= new Array();
	permis[0]= "-----chon---------";
	permis[1]= "Thành viên (members)";
	permis[2]= "Tác giả (authors)";
	permis[3]= "Guản lý ( managers)";
	permis[4]= "Quản trị (administrator)";
	permis[5]= "Quản trị cao cấp (supers)";
	
	
	//In Select 
	document.write("<select class=\"form-control\" id=\"slcPermis\" onchange=\"refreshPermis(this.form)\" >");
	
	//Sử dụng lặp với forEach
	permis.forEach(viewOption);
	
	document.write("</select>");
}
//---------------------------------------
function generateRoles(){
	//Danh sách vai trò
	var roles = new Array(
		"Người sử dụng",
		"Hệ sản phẩm",
		"NHóm sản phẩm",
		"Loại sản phẩm",
		"Sản phẩm",
		"Chuyên mục",
		"Thể loại",
		"Bài viết & tin tức",
		"Hoa đơn",
		"Khách hàng",
	);
	
	//Tạo cấu trúc 
	var role = "";
	for(var i=0;i<roles.length; i++){
		//Mở dòng
		if(i%3 ==0){
			role += " <div class=\"row\">"
		}
		
		role +=viewRole(i,roles[i]);
		
		//Dóng dòng
		if((i%3 ==2)||(i==roles.length-1)){
			role += "</div>";
		}
	}
	//xuất cấu trúc
	document.write(role);
	
	
}
function viewRole(id,name){
	var role = "";
	
	role +="<div class=\"col-md-4\">";
	role +="<div class=\"form-check\">";
	role +="<input class=\"form-check-input\" disabled name=\"chks\" type=\"checkbox\" id=\"chk"+id+"\">";
	role +="<label class=\"form-check-label\" for=\"chk"+id+"\">";
	role +="Quản lý "+name;
	role +="</label>";
	role +="</div>";
	role +="</div>";
	
	return role;
	
}




//---------------------------------------
function setCheckBox(fn, dis, check){
	//Duyệt các phần tử của form, và tìm vào những ô check cần làm việc
	for(var i=0;i<fn.elements.length;i++){
		if(fn.elements[i].type == "checkbox" && fn.elements[i].name== "chks"){
			fn.elements[i].disabled= dis;
			fn.elements[i].checked= check;
		}
	}
}
function refreshPermis(fn){
	//Lấy quyền thực thi
	var permis = parseInt(document.getElementById("slcPermis").value);
	
	if(permis==4 ||permis==5)
		this.setCheckBox(fn,true,true);
	if(permis==3)
		this.setCheckBox(fn,false,true);
	if(permis==2)
		this.setCheckBox(fn,false, false);
	if(permis==0 ||permis==1)
		this.setCheckBox(fn,true,false);
}



//---------------------------------------
//---------------------------------------
