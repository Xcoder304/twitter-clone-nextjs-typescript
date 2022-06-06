import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="group flex items-center space-x-2 px-3 lg:px-4 py-3 w-fit rounded-full cursor-pointer transition-all duration-600 ease-out hover:bg-[#E7E7E8] select-none">
      <Icon className="w-6 h-6 text-[#0f1419]" />

      <span className="group-hover:text-twitterColor text-[#0f1419] font-normal capitalize hidden lg:inline-flex lg:text-xl">
        {title}
      </span>
    </div>
  );
}

export default SidebarRow;
