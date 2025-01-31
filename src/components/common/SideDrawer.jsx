import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import React, { forwardRef, useImperativeHandle } from "react";
const SideDrawer = forwardRef(({ title, component: Component, size = "md", ...props }, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useImperativeHandle(ref, () => ({
    openDrawer: () => onOpen(),
    closeDrawer: () => onClose(),
  }));

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={size}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{title || "Drawer"}</DrawerHeader>
        <DrawerBody>
          {Component && <Component {...props} />}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

export default SideDrawer;
