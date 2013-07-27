
var reports;

$('#shiftListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'getshift.php?id='+id, function (data) {
		var reports = data.items;
		$.each(reports, function(index, reports) {
			$('#shiftList').append('<li><a href="employeedetails.html?id=' + reports.sid + '">' +
					'<h4>' + reports.sdate + ' ' + reports.stime + '</h4>' +
					'<p>' + reports.sfiled + '</p>' +
					'<span class="ui-li-count">' + reports.reportCount + '</span></a></li>');
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