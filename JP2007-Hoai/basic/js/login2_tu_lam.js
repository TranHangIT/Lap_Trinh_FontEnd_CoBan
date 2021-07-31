///bai nay la tu lam-------------
function checkVaildLogin2(fn){
	
	var name= document.getElementById("txtName").value;
	var pass= document.getElementById("txtPass").value;
	
	var viewError1=document.getElementById("viewError1");
	var viewError2=document.getElementById("viewError2");
	
	var validName = false;
	var validPass = false;
	
	
	
	//nếu cái này đúng thì không ẩn
	if(validName && validPass){
		btnSign.disabled = false;//không ẩn
	}else{
		btnSign.disabled = true;//ẩn
		
		//name 
		name = name.trim();
		if((name.length<5)||(name.length>50)){
			viewError1.innerHTML = "***Thiếu tên";
			viewError1.style.color= "red";
			validName = false;
		}else{
			if(name.indexOf(" ") !=-1){
				viewError1.innerHTML = "***Tên đăng nhập không được có dấu cách ";
				viewError1.style.color= "red";				
				validName= false;	
			}else{
				if(name.indexOf('@') !=-1){
					var parttern =  /^\w+@\w+[.]\w+$/;//mình nghĩ nên là như này thì đúng hơn
					if(!name.match(parttern)){
						viewError1.innerHTML = "***Không đúng cấu trúc hộp thư ";
						viewError1.style.color= "red";				
						validName=false;
					}else{
						viewError1.innerHTML ="<i class=\"fas fa-check\"></i>";
						viewError1.style.color= "blue";						
						validName=true;
					}
				}else{
					viewError1.innerHTML ="<i class=\"fas fa-check\"></i>";
					viewError1.style.color= "blue";						
					validName=true;
				}
			}
		}
		
		//pass
		pass = pass.trim();
		if(pass==""){
			viewError2.innerHTML = "***Thiếu mật khẩu ở hệ thống";
			viewError2.style.color= "red";
			validPass = false;
		}else{
			if(pass.length<6){
				viewError2.innerHTML = "***Độ dài mật khẩu không hợp lệ";
				viewError2.style.color= "red";
				validPass = false;
			}else{
				viewError2.innerHTML ="<i class=\"fas fa-check\"></i>";
				viewError2.style.color= "blue";	
				validPass = true;
			}
			
		}
		if(validName && validPass)
			btnSign.disabled = false;
	}
	
	
	
	
	
}