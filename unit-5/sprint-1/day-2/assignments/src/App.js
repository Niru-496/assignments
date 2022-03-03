import logo from './logo.svg';
import './App.css';

function App() {
  let mobOs = ["Android","Blackberry","iPhone","Windows Phone"];
  let mobManf = ["samsung","HTC","Micromax","Apple"];

  return (
		<div className="App">
			<h1>Mobile Operating System</h1>
			<ul>
				{mobOs.map((e) => {
					return tempContent(e);
				})}
				;
			</ul>
			<h1>Mobile Manfacturer</h1>
			<ul>
				{mobManf.map((e) => {
					return tempContent(e);
				})};
			</ul>
		</div>
  );
}

function tempContent(elem){
    return (<li>{elem}</li>)

}

export default App;
