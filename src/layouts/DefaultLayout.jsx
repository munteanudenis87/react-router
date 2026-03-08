import Homepage from '../components/Homepage';
import About from '../components/About';
import Products from '../components/Products';

export default function DefaultLayout() {
    return (
        <div>
            <Homepage />
            <Products />
            <About />
        </div>
    );
}