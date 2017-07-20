function addEmployee() {

	this.empDetails = {
		empName: document.getElementsByName("empName")[0].value,
		empId: document.getElementsByName("empId")[0].value,
		empCity: document.getElementsByName("empCity")[0].value
	}
	alert("Employee Addded Successfully!");
}

function clearEmpDetails() {
	document.getElementsByName("empName")[0].value = "";
	document.getElementsByName("empId")[0].value = "";
	document.getElementsByName("empCity")[0].value = "";
	
}

function readEmployee() {
	document.getElementsByName("empName")[0].value = empDetails.empName;
	document.getElementsByName("empId")[0].value = empDetails.empId;
	document.getElementsByName("empCity")[0].value = empDetails.empCity;
}

function updateEmployee(){

	if (document.getElementsByName("empName")[0].value != "") {
		empDetails.empName = document.getElementsByName("empName")[0].value;
	}
	
	if (document.getElementsByName("empId")[0].value != "") {
		empDetails.empId = document.getElementsByName("empId")[0].value;
	}

	if (document.getElementsByName("empCity")[0].value != "") {
		empDetails.empCity = document.getElementsByName("empCity")[0].value;
	}

	alert("Employee Updated Successfully!");
	clearEmpDetails();
}

function deleteEmployee(){
	empDetails.empName = "";
	empDetails.empId = "";
	empDetails.empCity = "";

	alert("Employee Details Deleted");
	clearEmpDetails();

}

function hideDiv() {
	document.getElementsByClassName("result")[0].style.display = "none";
}

function showDiv() {
	document.getElementsByClassName("result")[0].style.display = "block";
}