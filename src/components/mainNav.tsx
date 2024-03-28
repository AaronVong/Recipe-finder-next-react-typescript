"use client";
import { useState, useEffect, useCallback, ReactElement } from "react";
import { denormalize, MenuInterface } from "@drupal/decoupled-menu-parser";
import { fetchMenuItem } from "@/services/fetchWebContent";
import { Menu } from "@drupal/decoupled-menu-parser/dist/core/menu";
import {
  MenuElement,
  MenuElementInterface,
} from "@drupal/decoupled-menu-parser/dist/core/menu-element";
import AuthMenu from "./authMenu";
import ListItem from "./ultilities/listItem";
export default function MainNav() {
  const menuName = "rf-main-menu";
  const [menuItems, setMenuItems] = useState<Array<MenuElement>>([]);

  const loadMenuItems = useCallback(async () => {
    const data = await fetchMenuItem(menuName);
    if (data === null) {
      return;
    }
    const menu = denormalize(data, menuName);
    if (menu instanceof Menu) {
      setMenuItems(menu.tree);
    }
  }, []);

  useEffect(() => {
    loadMenuItems();
  }, []);

  // Render menu tree
  function renderMenu(
    menuElement: Array<MenuElementInterface> | null
  ): Array<JSX.Element>[] | null {
    let menu: Array<JSX.Element>[] = [];
    if (menuElement == null || menuElement.length == 0) {
      return null;
    }
    menu.push(
      menuElement.map((item, index) => {
        let child = [];
        if (item.children.length > 0) {
          child.push(renderMenu(item.children));
        }
        return (
          <ListItem
            key={item.title}
            itemTitle={item.title}
            textWithLink={true}
            link={item.link.href}
            itemClasses="group relative"
            childClases="hover:bg-green-600"
          >
            {child.length > 0 ? (
              <ul className="bg-green-500 w-max h-full gap-x-2 absolute top-full left-0 hidden group-hover:block">
                {child}\
              </ul>
            ) : null}
          </ListItem>
        );
      })
    );
    return menu;
  }
  return (
    <nav className="w-full border bg-green-500 border-green-500 flex justify-evenly">
      <div className="w-1/4 text-center">
        <a className="inline-block px-1 py-2 text-center" href="/">
          Logo
        </a>
      </div>
      <ul className="flex justify-center align-middle gap-x-2 w-2/4">
        {renderMenu(menuItems)}
      </ul>
      <AuthMenu />
    </nav>
  );
}
