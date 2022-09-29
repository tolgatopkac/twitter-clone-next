import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon, InboxIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  HashtagIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div>
      {/* Twitter Logo */}
      <div className="">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        ></Image>
      </div>

      {/* Menu */}

      <div className="">
        <SidebarMenuItem text="Home" Icon={HomeIcon} />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notification" Icon={BellIcon} />
        <SidebarMenuItem text="Message" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>
      {/* Button */}

      <button>Tweet</button>
      {/* Mini-Profile */}

      <div className="">
        <img
          src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/4:3/w_3332,h_2499,c_limit/1521-WIRED-Cat.jpeg"
          alt="User Image"
          className="h-24 w-24 rounded-full"
        />
        <div className="">
          <h4>Tolga Topkaç</h4>
          <p>@tolgatopkac</p>
        </div>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
    </div>
  );
};

export default Sidebar;
