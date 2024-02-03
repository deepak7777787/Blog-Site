import Navbar from './Navbar';
import Layout from './Layout';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './NotFound';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Layout />} />
                <Route path='/create' element={<Create />} />
                <Route path='/blogs/:id' element={<BlogDetails />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;

