import { Outlet } from 'react-router';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

export default function DefaultLayout() {
    return (
        <div>
            <header>
                < MainNav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                < Footer />
            </footer>
        </div>
    );
}