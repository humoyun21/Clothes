import React from "react";
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleIcon from '@mui/icons-material/People';

interface Route{
    path: string;
    content: string;
    icon: React.ReactElement;
}

const routes: Route[] = [
    {
        path: "/admin-panel",
        content: "Products",
        icon: <ProductionQuantityLimitsIcon />
    },
    {
        path: "/admin-panel/categories",
        content: "Categories",
        icon: <CategoryIcon />
    },
    {
        path: "/admin-panel/users",
        content: "Users",
        icon: <PeopleIcon />
    },
]

export default routes;