import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { Tooltip } from "react-tooltip";

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  Menu,
  MenuHandler,
  Button,
  Avatar,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, ChevronDownIcon, PowerIcon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";



function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { user, logOut } = useAuth();

        const handleLogOut = () => {
          logOut()
            .then(() => {})
            .catch((error) => toast.error(error.message));
        };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            id="profile"
            className="border border-gray-900 p-0.5"
            src={user?.photoURL || "https://i.ibb.co/hLmH9kQ/my-image.png"}
          />
          <Tooltip anchorSelect="#profile" content={user?.displayName} />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem onClick={closeMenu}>
          <List className="flex flex-col">
            <div className="flex">
              <UserCircleIcon className="w-5" />
              <NavLink
                to={"/my-profile"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FF4153] px-3 py-1  rounded-lg"
                    : "p-2 text-[#131313CC]"
                }
              >
                My Profile
              </NavLink>
            </div>
            <div className="flex gap-2">
              <PowerIcon className="w-5" />
              <button
                onClick={handleLogOut}
                className="bg-[#f56d7a] rounded text-white px-3 py-1"
              >
                Logout
              </button>
            </div>
          </List>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}


function NavList() {
  return (
    <List className="mt-4 items-center mb-6 gap-4 lg:gap-2 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#FF4153] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/all-jobs"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#FF4153] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        All Jobs
      </NavLink>

      <NavLink
        to={"/add-job"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#FF4153] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Add A Job
      </NavLink>

      <NavLink
        to={"/my-jobs"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#FF4153] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        My Jobs
      </NavLink>
      <NavLink
        to={"/blogs"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#FF4153] px-3 py-1  text-white  rounded-lg"
            : "p-2 text-[#131313CC]"
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to={"/applied-jobs"}
        className={({ isActive }) =>
          isActive
            ? "bg-[#FF4153] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
            : "text-[#f33245] border border-[#FF4153] px-3 py-1 rounded-lg"
        }
      >
        Applied Jobs
      </NavLink>
    </List>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useAuth();



  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="shadow-lg sticky top-0   z-50">
      <Navbar className="mx-auto max-w-7xl  shadow-none rounded-none px-3 lg:px-2 pt-4  mb-6 lg:py-5">
        <div className="flex items-center justify-between">
          <Typography className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center">
            <Link to={"/"}>
              <img className="w-40" src={logo} alt="" />
            </Link>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-4 lg:flex items-center">
            {user && <ProfileMenu />}

            <div>
              {!user && (
                <div className="flex gap-2">
                  <NavLink
                    to={"/login"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#FF4153] px-3 py-1 flex items-center justify-center  text-white  rounded-lg"
                        : "text-[#131313CC] border border-[#FF4153] px-3 py-1 rounded-lg"
                    }
                  >
                    Login
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <div className="flex gap-5">
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                </div>
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          <NavList />

          <div className="flex items-center justify-center">{user && <ProfileMenu />}</div>
          <div className="">
            {!user && (
              <div className="flex gap-5 flex-col">
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#FF4153] px-3 py-1 flex items-center mx-auto justify-center  text-white  rounded-lg"
                      : "text-[#131313CC] border flex items-center mx-auto justify-center border-[#FF4153] px-3 py-1 rounded-lg"
                  }
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
