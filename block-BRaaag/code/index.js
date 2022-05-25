let input = document.querySelector("input");
let root = document.querySelector("ul")
var form = document.querySelector("form");

function handleForm(event) { event.preventDefault(); };
form.addEventListener('submit', handleForm);

let allMovies = [];


input.addEventListener( 'keyup', (event)=>{
    if( event.keyCode === 13 ){
        allMovies.push({
            movie: event.target.value,
            watched: false
        });
        root.innerHTML = "";
        createUI();
        event.target.value = "";
    }
} );

function handelClick(event){
    console.log(event.target.checked)
    if ( event.target.checked === true ) {
        event.target.nextSibling.nextSibling.innerText = "Watched"
    }
    else  {
        event.target.nextSibling.nextSibling.innerText = "To Watch"
    }
};

function handelDelete(event){
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
        createUI();
}

// ! <<<<<< create UI >>>>>
function createUI( data = allMovies ){
    // root.innerHTML = "";
    let movieUI = data.map((ele,i)=>{
        let li = React.createElement( 
            "li",
            {key:i},
        React.createElement('input', {
        type:"checkbox",
        name:"checkbox",
        onClick: handelClick
        } ),
        React.createElement( 'span', {}, ele.movie ),
        React.createElement('div', {}, ele.watched ? "Watched" : "notWatched"),
        React.createElement( "button", { className: 'delete','data-id':i, onClick: handelDelete }, "x" )
        );
        console.log(li)
        return li; 
    });

        ReactDOM.render( movieUI, root );
};

// createUI(allMovies);

console.log("script is working");
