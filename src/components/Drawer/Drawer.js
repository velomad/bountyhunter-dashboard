import * as React from "react";
import Drawer from "@mui/material/Drawer";

export default function CustomDrawer({
  variant,
  children,
  id,
  open,
  anchor,
  width,
  handler,
}) {
  const handleDrawerClose = (anchor, open) => (event) => {
    handler(anchor, open);
  };

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={anchor}
          open={open}
          onClose={handleDrawerClose("left", false)}
          PaperProps={{
            id: "custom-scrollbar",
            style: { width: Number(width) },
          }}
        >
          <div>{children}</div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
