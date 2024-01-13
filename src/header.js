import React from "react";
import homeicon from "./icons/home.svg";
import residentialicon from "./icons/residential.svg";
import coverimg from "./cover.mp4";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import PropertyManagement from "./InvestwithME";
import AssetsClasses from "./AssetsClasses.js";


import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  HomeModernIcon,
  Bars3Icon,
  XMarkIcon,
  BuildingOfficeIcon,
  ChatBubbleOvalLeftIcon,
  CheckBadgeIcon,
  RectangleGroupIcon,
  ClockIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  ArrowRightOnRectangleIcon,
  TrophyIcon,
  UserGroupIcon,
  ReceiptPercentIcon,
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

import logo from "./image-8.png";
import { PhoneArrowUpRightIcon } from "@heroicons/react/20/solid";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
  transparent: "bg-transparent text-blue-gray-500",
};

const navListMenuItems = [
  {
    color: "blue",
    icon: HomeModernIcon,
    title: "Available listings",
    description: "Page of searchable listings",
    path: "/Listing",
  },
  {
    color: "blue-gray",
    icon: CheckBadgeIcon,
    title: "Portfolio",
    description: "Our portfolio",
    path: "/residentail",
  },
];

const navListMenuItems2 = [
  {
    color: "blue",
    icon: HomeModernIcon,
    title: "Listings",
    description: "Page of searchable listings",
    path: "/Listing",
  },
  {
    color: "blue-gray",
    icon: CheckBadgeIcon,
    title: "Portfolio",
    description: "Our Commercial Portfolio",
    path: "/commercial",
  },
];

const comapnyList = [
  {
    color: "blue",
    icon: UserGroupIcon,
    title: "Our Team ",
    description: "Meet our team",
    path: "/ourteam",
  },
  {
    color: "orange",
    icon: TrophyIcon,
    title: "Our Story",
    description: "Our amazing story",
    path: "/companyprofile",
  },
];


const Services = [
  {
    color: "blue",
    icon: ReceiptPercentIcon,
    title: "Management ",
    description: "Maintenance and leasing",
    path: "/propertymanage",
  },
  {
    color: "orange",
    icon: BuildingOffice2Icon,
    title: "Construction",
    description: "Construction and renovation",
    path: "/construction",
  },

  {
    color: "green",
    icon: HomeModernIcon,
    title: "Brokerage",
    description: "Residential and commercial",
    path: "/brokrage",
  },

  {
    color: "teal",
    icon: BuildingLibraryIcon,
    title: "Featured Properties",
    description: "Our featured properties",
    path: "/FeaturedProperties",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const [isMenuOpen2, setIsMenuOpen2] = React.useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = React.useState(false);

  const [isMenuOpen3, setIsMenuOpen3] = React.useState(false);
  const [isMobileMenuOpen3, setIsMobileMenuOpen3] = React.useState(false);

  const [isMenuOpen4, setIsMenuOpen4] = React.useState(false);
  const [isMobileMenuOpen4, setIsMobileMenuOpen4] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, path }, key) => (
      <a href={path} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  const renderItems2 = navListMenuItems2.map(
    ({ icon, title, description, color, path }, key) => (
      <a href={path} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  const renderCompanyList = comapnyList.map(
    ({ icon, title, description, color, path }, key) => (
      <a href={path} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  const renderServices = Services.map(
    ({ icon, title, description, color, path }, key) => (
      <a href={path} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <img src={residentialicon} className="h-[16px] w-[18px]" />
              Residential
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>

      <Menu
        open={isMenuOpen2}
        handler={setIsMenuOpen2}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen2 || isMobileMenuOpen2}
              onClick={() => setIsMobileMenuOpen2((cur) => !cur)}
            >
              <BuildingOffice2Icon className="h-[16px] w-[18px]" />
              Commercial
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen2 ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen2 ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2">{renderItems2}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen2}>{renderItems2}</Collapse>
      </div>

      <Menu
        open={isMenuOpen3}
        handler={setIsMenuOpen3}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen3 || isMobileMenuOpen3}
              onClick={() => setIsMobileMenuOpen3((cur) => !cur)}
            >
              <RectangleGroupIcon className="h-[16px] w-[18px]" />
              Company
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen3 ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen3 ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2">{renderCompanyList}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen3}>{renderCompanyList}</Collapse>
      </div>


      <Menu
        open={isMenuOpen4}
        handler={setIsMenuOpen4}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen4 || isMobileMenuOpen4}
              onClick={() => setIsMobileMenuOpen4((cur) => !cur)}
            >
              <RectangleGroupIcon className="h-[16px] w-[18px]" />
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen4 ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen4 ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-2 gap-y-2">{renderServices}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen4}>{renderServices}</Collapse>
      </div>


    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
      </Typography>
      <NavListMenu />

    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isMenuOpenLogin, setIsMenuOpenLogin] = React.useState(false);




  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-x1 px-4 py-2" color="transparent">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 cursor-pointer py-1.5 lg:ml-2" />
          <Typography variant="h6" color="blue-gray" className="hidden lg:block ml-2">
            Real Estate
          </Typography>
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray" onClick={() => window.open("/contactus")}>
            <PhoneArrowUpRightIcon className="h-4 w-4 inline-block mr-2" />
            <span >Contact Us </span>
          </Button>
          <Button variant="text" size="sm" color="blue-gray" onClick={() => window.open("https://app.propertyware.com/pw/index.html#/login/tenant/meretail")}>
            Owner Portal
          </Button>
          <Menu open={isMenuOpenLogin} handler={setIsMenuOpenLogin} offset={{ mainAxis: 20 }} placement="bottom" allowHover={true}>
            <MenuHandler>
              <Button variant="outlined" size="sm" onClick={() => window.open("/investorlogin")}>
                <div className="flex items-center gap-2">
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform ${isMenuOpenLogin ? "rotate-180" : ""}`}
                />
                Sign In
                
                </div>
              </Button>
            </MenuHandler>
            <MenuList className="hidden max-w-screen-xl rounded-xl lg:block mt-2">
              {/* Add any additional menu items or links for login options */}
              <MenuItem>
                <a href="/investorlogin">
                  <div className="flex items-center gap-2">
                  <ArrowRightOnRectangleIcon
                      strokeWidth={2.5}
                      className={`block h-4 w-4`}
                    />
                    Investor Login
                  </div>
                </a>
              </MenuItem>
              <MenuItem>
                <a href="https://app.propertyware.com/pw/index.html#/login/tenant/mecolumbus">
                  <div className="flex items-center gap-2">
                  <ArrowRightOnRectangleIcon
                      strokeWidth={2.5}
                      className={`block h-4 w-4`}
                    />
                    Residential tenant login
                  </div>
                </a>
              </MenuItem>
              <MenuItem>
                <a href="https://app.propertyware.com/pw/index.html#/login/tenant/mecommercial">
                  <div className="flex items-center gap-2">
                  <ArrowRightOnRectangleIcon
                      strokeWidth={2.5}
                      className={`block h-4 w-4`}
                    />
                    Commercial tenant login
                  </div>
                </a>
              </MenuItem>
              {/* Add more menu items if needed */}
            </MenuList>
          </Menu>

        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" onClick={() => window.open("https://app.propertyware.com/pw/index.html#/login/tenant/meretail")}>
            Investor Login
          </Button>
          <Button variant="outlined" size="sm" onClick={() => window.open("/investorlogin")}>
            Commercial
          </Button>
          <Button variant="outlined" size="sm" onClick={() => window.open("/investorlogin")}>
            Residential
          </Button>

        </div>
      </Collapse>
    </Navbar>
  );
}
