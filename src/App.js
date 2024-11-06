import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Block from './Components/Block/Block';
const Block2 = React.lazy(() => import('./Components/Block2'));
// import Block2 from './Components/Block2'
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Block />} />
				<Route
					path='/qwe'
					element={
						<Suspense fallback={<div>Идёт загрузка корзины...</div>}>
							<Block2 />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
