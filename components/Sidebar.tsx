import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import { useSession, signIn, signOut } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="col-span-2 px-2 mt-3 flex flex-col items-center justify-start lg:items-start lg:justify-start">
      <div className="w-12 h-12 hover:bg-[#E8F5FD] rounded-full flex items-center justify-center cursor-pointer mb-1 ml-1 lg:ml-2">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
          alt="twitter logo"
          className="w-[66%] h-[66%] object-contain select-none"
        />
      </div>

      <SidebarRow Icon={HomeIcon} title="home" />

      <SidebarRow Icon={HashtagIcon} title="Explore" />

      <SidebarRow Icon={BellIcon} title="Notifications" />

      <SidebarRow Icon={MailIcon} title="Massages" />

      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />

      <SidebarRow Icon={CollectionIcon} title="List" />

      <SidebarRow
        onClick={() => (session ? signOut() : signIn())}
        Icon={UserIcon}
        title={session ? "Sign out" : "Sign in"}
      />

      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default Sidebar;
