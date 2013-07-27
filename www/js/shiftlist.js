
$('#shiftListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'getshift.php?id='+id, function (data) {
		var reports = data.items;
		$.each(reports, function(index, employee) {
			$('#shiftList').append('<li><a href="employeedetails.html?id=' + employee.sid + '">' +
					'<h4>' + employee.sdate + ' ' + employee.stime + '</h4>' +
					'<p>' + employee.sfiled + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#shiftList').listview('refresh');
	});
});

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