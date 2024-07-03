import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { GiFire } from "react-icons/gi";


export default function NavbarHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuItems = ['Profile', 'DashBoard', 'Acitivys', 'My Settings', 'My']

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >

      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent>

      {/* Logo al Medio: F.Tablets */}
      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <GiFire />
          <p className=' font-bold text-inherit'>AMCE</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Fomato PC-WEB */}
      <NavbarContent className=''>
        <NavbarBrand>
          <GiFire />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color='foreground' href='#'>  Features </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current="page" >  Customers </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' color='foreground'>  Integrations </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat"> Sign Up </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {MenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === MenuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
