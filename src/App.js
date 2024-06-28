import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import ManagePosts from './ManagePosts'; // Import your other components as needed
import ManageCampaigns from './ManageCampaigns';
import ManageAccounts from './ManageAccounts';
import Messaging from './Messaging';
import Comments from './Comments';
import ManageCompanies from './ManageCompanies';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/manage-posts" element={<ManagePosts />} />
        <Route path="/manage-campaigns" element={<ManageCampaigns/>} />
        <Route path="/manage-accounts" element={<ManageAccounts/>} />
        <Route path="/messaging" element={<Messaging/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/manage-companies" element={<ManageCompanies/>} />
        {/* Define other routes similarly */}
      </Routes>
    </Router>
  );
};

export default App;
