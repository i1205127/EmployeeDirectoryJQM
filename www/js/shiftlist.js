//var serviceURL = "http://localhost/directory/services/";
var serviceURL = "http://polgahawelatown.com/EmployeeDirectoryJQM/services/";

var employees;

$('#shiftdetailsPage').bind('pageinit', function(event) {
	getShiftList();
});

function getShiftList() {
	$.getJSON(serviceURL + 'getshifts.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="shiftdetails.html?id=' + employee.wsid + '">' +
					'<img src="pics/' + employee.wspicture + '"/>' +
					'<h4>' + employee.sdate + ' ' + employee.stime + '</h4>' +
					'<p>' + employee.sfiled + '</p>' +
					'</a></li>');
		});
		$('#shiftList').listview('refresh');
	});
}