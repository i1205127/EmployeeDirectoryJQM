var shiftdata;

$('#shiftListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'getshift.php?id='+id, getShifts);
});

function getShifts(data){
		
		shiftdata = data.item;
		
		$.each(shiftdata, function(index, employee) {
			$('#shiftList').append('<li><a href="shiftlist.html?id=' + employee.sid + '">' +
					'<h4>' + employee.stime + ' ' + employee.sid + '</h4>' +
					'<p>' + employee.sdate + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#shiftList').listview('refresh');
	});
});
