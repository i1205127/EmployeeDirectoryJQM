$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getwardsister.php?id='+id, displayEmployee);
});

function displayEmployee(data) {
	var employee = data.item;
	var managerPhone = 07403656097;
	console.log(employee);
	$('#employeePic').attr('src', 'pics/' + employee.wspicture);
	$('#fullName').text(employee.wsfname + ' ' + employee.wslname);
	$('#employeeTitle').text(employee.title);
	$('#city').text(employee.wardname);
	console.log(employee.officePhone);
	if (employee.wardid == 1) {
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.wardid + '"><h3>View Shifts</h3>' +
				'<p>' + employee.wsfname + ' ' + employee.wardname + '</p></a></li>');
		
		$('#actionList').append('<li><a href="tel:' + managerPhone + '"><h3>Call Bank Manager</h3>' +
				'<p>' + managerPhone + '</p></a></li>');

				

	} else if (employee.wardid == 2){
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.wardid + '"><h3>View Shifts</h3>' +
				'<p>' + employee.wsfname + ' ' + employee.wardname + '</p></a></li>');
	}
	
	
	
	
	
	
	
	
//	if (employee.reportCount>0) {
//		$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
//				'<p>' + employee.reportCount + '</p></a></li>');
//	}
//	if (employee.email) {
//		$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
//				'<p>' + employee.email + '</p></a></li>');
//	}
//	if (employee.officePhone) {
//		$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
//				'<p>' + employee.officePhone + '</p></a></li>');
//	}
//	if (employee.cellPhone) {
//		$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
//				'<p>' + employee.cellPhone + '</p></a></li>');
//		$('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><h3>SMS</h3>' +
//				'<p>' + employee.cellPhone + '</p></a></li>');
//	}
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
