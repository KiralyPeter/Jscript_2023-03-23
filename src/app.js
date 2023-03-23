// init

const doc = {
     tbody: document.querySelector("#tbody")
};

const state = {
    host: "http://localhost:8000/",
    todos: []
};

getTodos();

function getTodos(){
    // host + végpont
    let url = state.host + "todos"
    fetch(url) // fetch - asszinkron utasítás...
    .then(response => response.json())
    .then(result => {
        console.log(result);
    }); 
}