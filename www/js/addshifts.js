



//Validate User In The Login And Log Out
function setShiftURL(){
    
    
    if(document.getElementById("date").value.length==0)
    {
        showAlerBox('Enter The User Name And Password');
    }
    else if(document.getElementById("time").value.length==0)
    {
        showAlerBox('Enter The date And time');
    }
    else
    {
        shiftUser(document.getElementById("date").value,document.getElementById("time").value);
    }
    
    
}


function shiftUser(formdate, formtime)
{
    
    $.getJSON("http://polgahawelatown.com/EmployeeDirectoryJQM/services/addshift.php?date="+formdate+"&time="+formtime).done(function(data) {
                                                                      var repo = data;
                                                                      console.log(data);                                                    
                                                                       if(repo==true){
                                                                         $.mobile.changePage( "wardsisterdetails.html", { transition: "slideup"});
                                                                       }
                                                                       });                        
                                                                      
}

function showAlerBox(msg)
{
    var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(msg);
    iframe.parentNode.removeChild(iframe);
}