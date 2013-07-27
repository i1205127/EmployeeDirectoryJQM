$('#reportListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'getreports.php?id='+id, function (data) {
		var reports = data.items;
		$('#reportList').append('<li>' +
					'<p>' + "teeteas" + '</p>' +
					'</li>');
		
		
		$.each(reports, function(index, employee) {
			$('#reportList').append('<li><a href="shiftlist.html?id=' + employee.sid + '">' +
					'<h4>' + employee.stime + ' ' + employee.sid + '</h4>' +
					'<p>' + employee.sdate + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#reportList').listview('refresh');
	});
});
