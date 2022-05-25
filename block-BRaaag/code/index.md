{
let id = event.target.dataset.id;
allMovies.splice(id, 1);
}
{
let id = event.target.id;
console.log(id);

allMovies[id].watched = !allMovies[id].watched
}