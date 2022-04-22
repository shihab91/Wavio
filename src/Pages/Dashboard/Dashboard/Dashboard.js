import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Switch,
  Route,
  useRouteMatch,
  NavLink,
  useHistory,
} from "react-router-dom";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Shared/AdminRoute/AdminRoute";
import ManageAllProducts from "../ForAdmin/ManageAllOrders/ManageAllOrders";
import AddProduct from "../ForAdmin/AddProduct/AddProduct";
import MakeAdmin from "../ForAdmin/MakeAdmin/MakeAdmin";
import ManageProducts from "../ForAdmin/ManageProducts/ManageProducts";
import "./Dashboard.css";
import { BiHomeAlt } from "react-icons/bi";
import { GrNotes, GrUserAdmin } from "react-icons/gr";
import { CgPlayListAdd } from "react-icons/cg";
import { BiBox } from "react-icons/bi";
import { BsBoxArrowInRight } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";

const drawerWidth = 250;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { user, admin, signOutUser } = useAuth();
  const history = useHistory();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const dashboardLink = {
    textAlign: "left",
    padding: "auto",
  };
  const dashboardButton = {
    fontFamily: "var(--nunito-font)",
  };
  const drawer = (
    <Box
      sx={{
        height: "100%",
        background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
        color: "white",
      }}
      className="dashboard-drawer"
    >
      {user?.email && admin ? (
        <Box
          sx={{
            fontFamily: "var(--dosis-font)",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            mt: 25,
            textTransform: "none",
          }}
        >
          <NavLink style={dashboardLink} to={`/`} className="dashboard-link">
            <BiHomeAlt className="dashboard-link-icon" /> Home
          </NavLink>
          <NavLink
            style={dashboardLink}
            to={`${url}/manageAllOrders`}
            className="dashboard-link"
          >
            <GrNotes className="dashboard-link-icon" /> All Orders
          </NavLink>
          <NavLink
            style={dashboardLink}
            to={`${url}/AddProduct`}
            className="dashboard-link"
          >
            <CgPlayListAdd className="dashboard-link-icon" /> Add product
          </NavLink>
          <NavLink
            style={dashboardLink}
            to={`${url}/makeAdmin`}
            className="dashboard-link"
          >
            <GrUserAdmin className="dashboard-link-icon" /> Make Admin
          </NavLink>
          <NavLink
            style={dashboardLink}
            to={`${url}/manageProducts`}
            className="dashboard-link"
          >
            <BiBox className="dashboard-link-icon" /> Products
          </NavLink>
          <button
            style={dashboardButton}
            onClick={() => {
              signOutUser(history);
            }}
            className="dashboard-link"
          >
            <BsBoxArrowInRight className="dashboard-link-icon" /> Log Out
          </button>
        </Box>
      ) : (
        <Box
          sx={{
            fontFamily: "var(--dosis-font)",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            mt: 25,
            textTransform: "none",
          }}
        >
          <NavLink style={dashboardLink} to={`/`} className="dashboard-link">
            <BiHomeAlt className="dashboard-link-icon" /> Home
          </NavLink>
          <NavLink
            style={dashboardLink}
            to={`${url}/myOrders`}
            className="dashboard-link"
          >
            <GrNotes className="dashboard-link-icon" /> My Orders
          </NavLink>
          <NavLink
            style={dashboardLink}
            to={`${url}/review`}
            className="dashboard-link"
          >
            <MdRateReview className="dashboard-link-icon" /> Review
          </NavLink>
          <button
            style={dashboardButton}
            className="dashboard-link"
            onClick={() => {
              signOutUser(history);
            }}
          >
            <BsBoxArrowInRight className="dashboard-link-icon" /> Log Out
          </button>
        </Box>
      )}
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          background: "rgba( 255, 255, 255, 0.4 )",
          backdropFilter: " blur( 3px )",
          border: "3px solid rgba( 255, 255, 255, 0.18 )",
          borderRadius: { sm: "15px" },
          width: { sm: `calc(100% - ${drawerWidth + 30}px)` },
          ml: { sm: `${drawerWidth + 15}px` },
          mr: { sm: "15px" },
          mt: { sm: "15px" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "var(--color)" }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "var(--blue-color)",
              py: 3,
              fontSize: 25,
              fontFamily: "var(--nunito-font)",
            }}
          >
            Wavio Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                color: "var(--blue-color)",
                fontFamily: "var(--dosis-font )",
                mt: 15,
              }}
            >
              click any side bar link to see the page source
            </Typography>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/payment/:appointmentId`}>
            <Pay />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <AdminRoute path={`${path}/AddProduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
