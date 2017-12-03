var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: './img/harry.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: './img/lion.jpg'
	},
	{
		id: 3,
		title: 'Gwiezdne Wojny: Przebudzenie Mocy',
		desc: 'Miecze świetlne, bitwy kosmiczne, remake Nowej Nadzieja',
		img: './img/force.png'
	},
	{
		id: 4,
		title: 'Gwiezdne Wojny: Ostatni Jedi',
		desc: 'Miecze świetlne, bitwy kosmiczne, może jednak to nie będzie remake',
		img: './img/last.jpg'
	},
	{
		id: 5,
		title: 'Łotr 1',
		desc: 'A tu bez miecza świetlnego;-)',
		img: './img/rogue.jpg' 
	},
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render : function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MovieImage, {img: this.props.movie.img})
			)  
		)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render : function() {
		return React.createElement('p', {}, this.props.desc)
	}
});

var MovieTitle = React.createClass({
	propTypes: {
	   title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title)
	}
});

var MovieImage = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('img', {src: this.props.img})
	}
});

var moviesElements = movies.map(function(movie) {
	return React.createElement(Movie, {key:movie.id, movie: movie})
});

var MovieList = React.createClass({
	render: function() {
		return React.createElement('ul', {}, moviesElements)
	}
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement(MovieList, {})
	);

ReactDOM.render(element, document.getElementById('app'));