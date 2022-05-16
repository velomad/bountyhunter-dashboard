import home from 'assets/icons/home.svg'
import box from 'assets/icons/box.svg'
import list from 'assets/icons/list.svg'
import shoppingCart from 'assets/icons/shopping-cart.svg'


const modules = {
  id: "modules",
  type: "group",
  children: [
    {
      id: "home",
      title: "Home",
      url: "/",
      icon: home
    },
    {
      id: "category",
      title: "Category / Sub-category",
      url: "/categories",
      icon: list,
    },
    {
      id: "product",
      title: "Product",
      url: "/",
      icon: shoppingCart
    },
    {
      id: "orders",
      title: "Orders",
      url: "/",
      icon: box
    },
  ],
};

export default modules;
