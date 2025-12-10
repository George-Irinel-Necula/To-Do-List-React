import { useState } from "react";
import "./App.css";
import {
  HeroUIProvider,
  Button,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Badge,
  Chip,
  Divider,
} from "@heroui/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { IconChevronDown,IconBrandLinkedin,IconChevronRight,IconCheckbox, IconRosetteDiscountCheck, IconRosetteDiscountCheckFilled, IconCircle, IconCircleCheck, IconCircleCheckFilled } from "@tabler/icons-react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

function App() {
  return (
    <>
      <HeroUIProvider>
        <Navbar>
          <NavbarBrand>
            <div className="flex items-center gap-4">
            <p className="font-bold text-xl">&lt;GIN/&gt;</p>
            <Divider orientation="vertical" className="h-6 w-0.5"></Divider>
            <h1 className="font-semibold text-xl">To Do List</h1>
            </div>
          </NavbarBrand>
          <NavbarContent justify="end">
            <Dropdown>
              <DropdownTrigger>
                <div className="flex items-center gap-2 font-semibold">
                  <Avatar
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="George Irinel Necula"
                    size="sm"
                    src="./Profile.png"
                  ></Avatar>
                  <div className="cursor-pointer flex items-center gap-1 ">
                    <h1 className="hidden sm:flex">
                    George Irinel Necula
                  </h1>
                  <IconChevronDown size={16} stroke={2} />
                  </div>
                  
                </div>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="avatar">
                  <div className="flex items-center gap-2">
                    <Avatar size="lg" src={"./Profile.png"}></Avatar>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-lg font-bold">
                        George Irinel Necula
                      </h1>
                      <Chip
                        size="sm"
                        color="primary"
                      >
                        <div className="flex items-center gap-1">
                          <IconCircleCheckFilled size={20}></IconCircleCheckFilled><h1>Creator</h1>
                        </div>
                      </Chip>
                    </div>
                  </div>
                </DropdownItem>
                <DropdownItem key="linkedin">
                  <a className="flex items-center gap-2" href="https://www.linkedin.com/in/george-irinel-necula-5a2b78136/"><IconBrandLinkedin stroke={2} /><h1>My LinkedIn</h1><IconChevronRight size={16} stroke={2}></IconChevronRight></a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>
      </HeroUIProvider>
    </>
  );
}

export default App;
