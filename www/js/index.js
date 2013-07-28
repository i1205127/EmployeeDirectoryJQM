



//Validate User In The Login And Log Out
function setURL(){
    
    
    if(document.getElementById("username").value.length==0)
    {
        showAlerBox('Enter The User Name And Password');
    }
    else if(document.getElementById("password").value.length==0)
    {
        showAlerBox('Enter The User Name And Password');
    }
    else
    {
        validateUser(document.getElementById("username").value,document.getElementById("password").value);
    }
    
    
}


function validateUser(uName, pwd)
{
    
    


    $.getJSON("http://polgahawelatown.com/EmployeeDirectoryJQM/services/getlogin.php?username="+uName+"&password="+pwd).done(function(data) {
                                                                      var repo = data;
                                                                      console.log(data);                                                    
                                                                       if(repo.username==uName){
                                                                       //window.localStorage["username"] = uName;
                                                                       //window.localStorage["password"] = pwd;
                                                                       //if(window.localStorage["username"] == uName)
                                                                       //{
                                                                         $.mobile.changePage( "wardsisterlist.html", { transition: "slideup"});
                                                                       //}
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