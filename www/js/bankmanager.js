//var serviceURL = "http://localhost/directory/services/";
var serviceURL = "http://polgahawelatown.com/EmployeeDirectoryJQM/services/";

var employees;

//$('#wardSisterListPage').bind('pageinit', function(event) {
//	getEmployeeList();
//});


$('#bankManagerListPage').live('pageshow', function(event) {
	getBankManager();
});


function getBankManager() {
	$.getJSON(serviceURL + 'getbankmanagers.php', function(data) {
		$('#bankManagerList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#bankManagerList').append('<li><a href="bankmanagerdetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.fname + ' ' + employee.lname + '</h4>' +
					'<p>' + employee.wardid + '</p>' +
					'</a></li>');
		});
		$('#bankManagerList').listview('refresh');
	});
}