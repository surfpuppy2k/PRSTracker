/*  */
function getJSON(path) {
    if(path){
        return fetch(path).then(response => response.json());
    }
}