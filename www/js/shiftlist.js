//var serviceURL = "http://localhost/directory/services/";
var serviceURL = "http://polgahawelatown.com/EmployeeDirectoryJQM/services/";

var shift : [];

$('#shiftdetailsPage').bind('pageinit', function(event) {
	getShiftList();
});

function getShiftList() {
	$.getJSON(serviceURL + 'getshifts.php', function(data) {
		$('#employeeList li').remove();
		shift = data.items;
		
		$.each(shift, function(index, shift) {
			$('#shiftList').append('<li>' +
					'<h4>' + shift.sdate + ' ' + shift.stime + '</h4>' +
					'<p>' + shift.sfilled + '</p>' +
					'</li>');
		});
		$('#shiftList').listview('refresh');
	});
}