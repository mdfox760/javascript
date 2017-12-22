class ShoppingList extends React.Component {
	render () {
		return (
			<div className="shopping-list">
			  <h1>Shopping List for {this.props.name}</h1>
			    <ul>
			      <li>Instagram</li>
			      <li>Oculus</li>
			      <li>Magic Leap</li>
			    </ul>
			  </div>
		);
	}
}

// Example usage: <ShoppingList name="Matt" />
// This should be the same as above
// return React.createElement('div', {className: 'shopping-list'},
//  React.createElement('h1', /* ... h1 children ... */),
//  React.createElement('ul', /* ... ul children ... */)
// );