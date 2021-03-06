import React from "react";
import { Route, Routes } from "react-router-dom";
import AddWaste from "../pages/add-waste/AddWaste";
import Company from "../pages/company";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import SearchPage from "../pages/search-page/SearchPage";
import SearchResults from "../pages/SearchResults/SearchResults";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addwaste" element={<AddWaste />} />
      <Route path="/company/:id" element={<Company />} />
      <Route path="/search" element={<SearchPage />}/>
      <Route path="/search/:need/:material" element={<SearchResults />}/>
    </Routes>
  );
};

export default Router;
