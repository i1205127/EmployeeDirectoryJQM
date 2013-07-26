//var serviceURL = "http://localhost/directory/services/";
var serviceURL = "http://polgahawelatown.com/EmployeeDirectoryJQM/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getwardsisters.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.fname + ' ' + employee.lname + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'</a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}