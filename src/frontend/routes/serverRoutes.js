import Home from '../containers/Home';
import ItemsList from '../containers/ItemsList';
import ItemDetails from '../containers/ItemDetails';
import NotFound from '../containers/NotFound';

const routes = [
    {
        exact: true,
        path: "/",
        component: Home
    },
    {
        exact: true,
        path: "/items",
        component: ItemsList
    },
    {
        exact: true,
        path: "/items/:id",
        component: ItemDetails
    },
    {
        name: "NotFound",
        component: NotFound
    }
]

export default routes