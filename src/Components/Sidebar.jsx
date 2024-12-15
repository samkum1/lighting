import { Link, useLocation } from "react-router-dom";

const sideBarItems = [
    {
        name: "Dashboard",
        link: "/",
        icon: "https://lightningproxies.net/assets/images/sidebar-iconsV2/home-2.svg",
        activeIcon: "https://lightningproxies.net/assets/images/sidebar-iconsV2/home.svg"
    },
    {
        name: "Purchase Plan",
        link: "/purchase-plan",
        icon: "https://lightningproxies.net/assets/images/sidebar-iconsV2/purchase-plan-2.svg",
        activeIcon: "https://lightningproxies.net/assets/images/sidebar-iconsV2/purchase-plan.svg"
    },
    {
        name: "Deposit Balances",
        link: "/deposit-balance",
        icon: "https://lightningproxies.net/assets/images/sidebar-iconsV2/topup-2.svg",
        activeIcon: "https://lightningproxies.net/assets/images/sidebar-iconsV2/topup.svg"
    },
    {
        name: "Invoices",
        link: "/invoices",
        icon: "https://lightningproxies.net/assets/images/sidebar-iconsV2/invoices-2.svg",
        activeIcon: "https://lightningproxies.net/assets/images/sidebar-iconsV2/invoices.svg"
    },
]


const Sidebar = () => {
    const location = useLocation()

    return (
        <div className="h-screen w-80 bg-white p-4">
            <h2 className="text-gray-500 font-semibold text-sm mb-4">MAIN MENU</h2>
            <ul>
                {
                    sideBarItems?.map(ite => {
                        return <li className={`${location?.pathname === ite?.link ? "bg-[#E5F4FF] rounded-lg" : ""} my-5 hover:bg-[#E5F4FF] py-2 px-3`}>
                            <Link
                                to={ite?.link}
                                className="flex items-center gap-3 text-gray-600 "
                            >
                                <img src={ite?.link === location?.pathname ? ite?.activeIcon : ite?.icon} alt="" />
                                <span className="font-medium">{ite?.name}</span>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Sidebar;
