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
        // console.log(result);
        state.todos = result;
        render();
    }); 
}

function render(){
    let rows = ""; // kezdetben üres
    state.todos.forEach((todo) => {
        // `` = változó behelyettesítés (AltGR + 7)
        rows += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>${todo.ready}</td>
            </tr>
        `; 
        // console.log(todo.name);  
    });

    tbody.innerHTML = rows;

}