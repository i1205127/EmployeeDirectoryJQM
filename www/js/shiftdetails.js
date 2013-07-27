$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getshifts.php?id='+id, displayEmployee);
});

function displayEmployee(data) {
	var employee = data.item;
	var managerPhone = "07403656097";
	var managerEmail = "rasranasinghe@gmail.com"
	console.log(employee);
	//$('#employeePic').attr('src', 'pics/' + employee.wspicture);
	$('#fullName').text(employee.wsfname + ' ' + employee.wslname);
	$('#employeeTitle').text(employee.title);
	$('#city').text(employee.wardname);
	console.log(employee.officePhone);
	if (employee.wardid == 1) {
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.wardid + '"><h3>View Shifts</h3>' +
				'<p>' + employee.wsfname + ' ' + employee.wardname + '</p></a></li>');
		


	} else if (employee.wardid == 2){
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.wardid + '"><h3>View Shifts</h3>' +
				'<p>' + employee.wsfname + ' ' + employee.wardname + '</p></a></li>');
	
				
	
	} else if (employee.wardid == 3){
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.wardid + '"><h3>View Shifts</h3>' +
				'<p>' + employee.wsfname + ' ' + employee.wardname + '</p></a></li>');


				
	} else if (employee.wardid == 4){
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.wardid + '"><h3>View Shifts</h3>' +
				'<p>' + employee.wsfname + ' ' + employee.wardname + '</p></a></li>');


	}
	
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
