import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";

function App() {
    return (
        <Router>
            <Header />

            <main className='py-3'>
                <Container>
                    <Route path='/login' component={LoginScreen} />
                </Container>
            </main>
        </Router>
    );
}

export default App;
