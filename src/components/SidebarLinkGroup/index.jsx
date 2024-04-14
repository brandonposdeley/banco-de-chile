import React, {
  useState,
} from 'react';

function SidebarLinkGroup({
  children,
  activecondition,
}) {
  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <li
      className={`px-3 py-2 rounded-lg mb-6 last:mb-4 text-slate-600 hover:text-accent ${activecondition && 'bg-transparent text-accent lg:bg-accent lg:text-white 2xl:bg-transparent 2xl:text-accent sidebar-expanded:bg-transparent sidebar-expanded:text-accent'}`}
    >
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;
