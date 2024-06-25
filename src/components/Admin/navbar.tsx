"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { ADMIN_ROUTES } from "@/core/routes";
import { logout } from "@/backend/Services/auth";
import { useRouter, usePathname } from "next/navigation";


export default function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const routes = useRouter();

  const menuItems2 = [
    {
      name: "Dashboard",
      link: ADMIN_ROUTES.DASHBOARD,
    },
    {
      name: "General",
      link: ADMIN_ROUTES.CONTENT,
    },
    {
      name: "Information",
      link: ADMIN_ROUTES.INFORMATION,
    },
    {
      name: "Enquiries",
      link: ADMIN_ROUTES.ENQUIRY,
    },
    {
      name: "Recruitment",
      link: ADMIN_ROUTES.RECRUITMENT,
    },
    {
      name: "Company",
      link: ADMIN_ROUTES.OUR_STAFF,
    }

  ];

  const handleSignOut = async () => {
    const resp = await logout();
    if (resp) {
      alert("Logged out successfully");
      routes.push(ADMIN_ROUTES.AUTH);

    } else {
      alert("Logout failed");
    }
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Logo</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        {
          menuItems2.map((item, index) => (
            <NavbarItem key={`${item}-${index}`} isActive={

              pathname === item.link
            } >
              <Link color="secondary" href={item.link
              }>
                {item.name}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">

        <NavbarItem>
          <Button as={Link} onClick={handleSignOut} color="danger" href="#" variant="flat">
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>

        {
          menuItems2.map((item, index) => (
            <NavbarMenuItem isActive={pathname === item.link} key={`${item}-${index}`}>
              <Link

                className="w-full"
                href={item.link}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))
        }
        <NavbarMenuItem>
          <Button
            onClick={handleSignOut}
            color="danger"
            variant="flat"
          >
            Logout
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
