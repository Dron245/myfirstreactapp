import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Block from "./Components/Block/Block";
const Block2 = React.lazy(() => import("./Components/Block2"));
// import Block from './Components/Block';
// import Block2 from './Components/Block2';
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={
					<Suspense fallback={<div>Идёт загрузка корзины...</div>}>
						<Block/>
					</Suspense>
					}/>
				<Route path="/qwe" element={<Block2/>}/>
			</Routes>
		</>
	);
}

export default App;
