$('#shiftListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'getshift.php?id='+id, function (data) {
		var reports = data.item;
		$.each(reports, function(index, employee) {
			$('#shiftList').append('<li><a href="employeedetails.html?id=' + employee.sid + '">' +
					'<h4>' + employee.sdate + ' ' + employee.stime + '</h4>' +
					'<p>' + employee.swardid + '</p>' +
					'<span class="ui-li-count">' + employee.sfilled + '</span></a></li>');
		});
		$('#shiftList').listview('refresh');
	});
});
