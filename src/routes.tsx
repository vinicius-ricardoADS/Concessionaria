import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Home />} />
			<Route path="/test" element={<Test />} />
		</Route>
	)
);

export default function Router() {
	return <RouterProvider router={router} />;
}
