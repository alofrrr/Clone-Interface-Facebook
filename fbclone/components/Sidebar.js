import Perfil from '../public/Perfil.jpg'
import SidebarRow from './SidebarRow';

import Image from 'next/image';
import {
    BellIcon,
    CalendarIcon,
    ChatIcon,
    ChevronDownIcon,
    ClockIcon,
    HomeIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    UsersIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    InboxIcon,
    DesktopComputerIcon,
    SearchIcon,
    LibraryIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import Shortcuts from './Shortcuts';

function Sidebar() {
    return (
        <div className="p-2 mt-2 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={Perfil} title="Ana Laura" />
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
            <h2 className="text-xl text-gray-500 p-2 py-0 max-w-[600px] xl:min-w-[300px]">Shortcuts</h2>

            <div className="p-2 mt-2 max-w-[600px] xl:min-w-[300px]">
                <Shortcuts src={"https://i.ibb.co/z7qjR9h/unnamed.png"} title="Candy Crush Saga" />
            </div>
        </div>

    )
}

export default Sidebar