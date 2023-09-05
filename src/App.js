import React, { useState } from "react";
import { SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import { CssBaseline, makeStyles } from "@material-ui/core";
import AppHeader, { drawerWidth } from "./components/app-header/app-header_index";
import BuildToolTable from "./views/buildTool_table/buildTool_index";
import ViewProject from "./views/project_details/project_view";
import CreateProjectForm from "./views/project_details/project_createForm";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    marginLeft: theme.spacing(9),
    width: `calc(100% - ~{theme.spacing(7) + 10}px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ~{theme.spacing(9) + 10}px)`,
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ~{drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
        <SnackbarProvider maxSnack={1} autoHideDuration={2500}>
          <CssBaseline />
          <AppHeader onDrawerChange={setDrawerOpen} />
          <main
            className={clsx(classes.content, {
              [classes.appBarShift]: drawerOpen,
            })}
          >
            <div className={classes.toolbar} />
            <Routes>

              <Route path="/BuildTools" element={<BuildToolTable />} />
                            <Route path="/Projects/view/:id" element={<ViewProject />} />
              <Route path="/Projects/create" element={<CreateProjectForm />} />
            </Routes>
          </main>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
