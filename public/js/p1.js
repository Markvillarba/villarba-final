setTimeout(function(){
	x();
},1000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?i=tt0120812"
}).done(function(res){
	console.log(res);
	let html = `
	   <center>
	   <br>
		<h1><bold>${res.Title}</h1></br></bold>
		<img width=700 height=900 src="${res.Poster}"/>
		<div id="container">
		<div id="left">
		
		</div><br></br>
		<h3>Type: ${res.Type}</h3>
		<h3>Released: ${res.Released}</h3>
		<h3>Runtime: ${res.Runtime}</h3>
		<h3>Genre: ${res.Genre}</h3>
		<h3>Director: ${res.Director}</h3>
		<h3>Writer: ${res.Writer}</h3>
		<h3>Actors: ${res.Actors}</h3>
		<h3>Plot: ${res.Plot}</h3>
		<h3>Language: ${res.Language}</h3>
		<h3>Country: ${res.Country}</h3>
		<h3>Awards: ${res.Awards}</h3>
</div>
		
	`;
	$('#app').html(html);

});
}