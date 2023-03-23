/*
* File: app.js
* Author: Király Péter
* Copyright: 2023, Király Péter
* Group: Szoft 1/2/E (I-2 E)
* Date: 2023-03-23
* Github: https://github.com/KiralyPeter/Jscript_2023-03-23
* Licenc: GNU GPL
*/

const doc = {
     tbody: document.querySelector("#tbody")
};

const state = {
    host: "http://localhost:8000/",
    todos: []
};

getTodos();

// lekérdezi a Todos-t
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

// A lekérdezett Todos-t kirendereli a táblázatba
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

    doc.tbody.innerHTML = rows;

}