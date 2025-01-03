import "./App.css";
import "primeicons/primeicons.css";
import Header from "./components/Header";
import Menubar from "./Menu/menubar";

function App() {
	return (
		<>
			<div className="bg-gray-300">
				<Header />
        <Menubar />
			</div>
		</>
	);
}

export default App;
