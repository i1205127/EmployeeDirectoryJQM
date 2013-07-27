

//var serviceURL = "http://localhost/directory/services/";
var serviceURL = "http://polgahawelatown.com/EmployeeDirectoryJQM/services/";

var employees;

$('#reportListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getwardsisters.php', function(data) {
		$('#reportList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#reportList').append('<li><a href="wardsisterdetails.html?id=' + employee.wsid + '">' +
					'<img src="pics/' + employee.wspicture + '"/>' +
					'<h4>' + employee.wsfname + ' ' + employee.wslname + '</h4>' +
					'<p>' + employee.wardid + '</p>' +
					'</a></li>');
		});
		$('#reportList').listview('refresh');
	});
}