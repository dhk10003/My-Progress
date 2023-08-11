import {Routes, Route} from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <h1>Home</h1>

            {/* routes that can be rendered inside this component: */}
            <Routes>
                <Route path="/home" element={<h1>Home 2</h1>} />
                <Route path="/about2" element={<h1>About 2</h1>} />
                <Route path="/products2" element={<h1>Products 2</h1>} />
            </Routes>
        </div>
    )
}

export default Home