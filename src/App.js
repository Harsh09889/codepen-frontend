import Layout from "./components/Layout";
import AllRoutes from "./components/Routes";
import { AuthContextProvider } from "./contexts/auth";
import CodeProvider from "./contexts/code";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<ToastContainer />
			<Layout>
				<AuthContextProvider>
					<CodeProvider>
						<AllRoutes />
					</CodeProvider>
				</AuthContextProvider>
			</Layout>
		</>
	);
}

export default App;
