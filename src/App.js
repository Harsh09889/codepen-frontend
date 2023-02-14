import Layout from "./components/Layout";
import AllRoutes from "./components/Routes";
import { AuthContextProvider } from "./contexts/auth";
import CodeProvider from "./contexts/code";
function App() {
	return (
		<Layout>
			<AuthContextProvider>
				<CodeProvider>
					<AllRoutes />
				</CodeProvider>
			</AuthContextProvider>
		</Layout>
	);
}

export default App;
