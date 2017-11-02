//获取当前时间，拼接到filename中
function createFileName() {
	var picsPath="C:\\Users\\ei\\Desktop\\fairy\\selenium\\SelIDE\\BCM\\ResultPics\\";
	var times=new Date();
	var fileName;
	var file;
	fileName=
		//times.getFullYear()+'_'+
		//(1+times.getMonth())+'_'+
		//times.getDate()+'_'+
		times.getHours()+'_'+
		times.getMinutes()+'_'+
		times.getSeconds()+
		'.png';
	file=picsPath+fileName;
	//document.getElementById("showResult").innerHTML=file;
	return file;

}

/*
var file={
	picsPath:"C:\\Users\\ei\\Desktop\\fairy\\selenium\\SelIDE\\BCM\\ResultPics\\",
	fileName:fileName
}*/