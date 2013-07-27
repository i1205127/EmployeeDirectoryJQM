//var serviceURL = "http://localhost/directory/services/";
var serviceURL = "http://polgahawelatown.com/EmployeeDirectoryJQM/services/";

var employees;

$('#wardSisterListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getwardsisters.php', function(data) {
		$('#wardSisterList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.wsid + '">' +
					'<img src="pics/' + employee.wspicture + '"/>' +
					'<h4>' + employee.wsfname + ' ' + employee.wslname + '</h4>' +
					'<p>' + employee.wardid + '</p>' +
					'</a></li>');
		});
		$('#wardSisterList').listview('refresh');
	});
}