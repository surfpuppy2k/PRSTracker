/*  */
function getFullName(pid, personsDB) {
    if(pid){
        if(personsDB)
        {
            var result = personsDB({id:{"is":pid}})
            return result.first().first + " " + result.first().last;
        }
    }
}

function getMileage(mileage)
{
    if(mileage)
    {

    }
}

function participantInfo(id, fullName){

    var scriptPath = "./data/Mileage/ID00" + id;
    <script type="text/javascript"> 
        var JSLink = scriptPath;
        var JSElement = document.createElement('script');
        JSElement.src = JSLink;
        JSElement.onload = OnceLoaded;
        document.getElementsByTagName('head')[0].appendChild(JSElement);

        function OnceLoaded() {
            // Once loaded.. load other JS or CSS or call objects of version.js
        }
    </script>
}