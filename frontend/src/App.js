import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { UserProvider } from "./context/userState";

function App() {
    return (
        <Router>
            <UserProvider>
                <Header />

                <main className='py-3'>
                    <Container>
                        <Route path='/login' component={LoginScreen} />
                        <Route path='/signup' component={RegisterScreen} />
                    </Container>
                </main>
            </UserProvider>
        </Router>
    );
}

export default App;
