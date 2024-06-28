import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  Badge,
  TextField,
  FormControl,
  InputLabel,
  ListSubheader,
  InputAdornment
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { AiOutlineCompass } from "react-icons/ai";
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

const CompanyEnum = {
  MANAGE_COMPANIES: 'Manage Companies',
  INDIA_FONT: 'IndiaFont',
  ARTO_MANIA: 'ArtoMania Studio Pvt Ltd',
  BIRTHDAY_BOOM: 'Birthday Boom',
  CAMPAIGN_SWIFT: 'Campaign Swift',
};

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(CompanyEnum.INDIA_FONT);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleNavigation = (path, item) => {
    setSelectedItem(item);
    navigate(path);
  };

  const filteredCompanies = Object.values(CompanyEnum).filter(company =>
    company.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Box sx={{
      top: '0px',
      left: '54px',
      width: '314px',
      height: '1080px',
      position: 'relative',
      backgroundColor: '#ECF1FE',
      padding: '16px',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
      fontFamily: 'Roboto, sans-serif',
    }}>
      {/* Logo */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '16px',
      }}>
        <img src="https://www.logolynx.com/images/logolynx/52/5284b2177a90c1e4778524dcfee0f184.png" alt="Logo" style={{ width: '75px', height: '75px' }}/>
      </Box>

      {/* Company Selector */}
      <Box
        sx={{
          height: '40px',
          mb: '16px',
          opacity: '1',
          backgroundColor: '#0058FF',
          borderRadius: '5px',
          color: 'white !important',
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="search-select-label"></InputLabel>
          <Select
            MenuProps={{
              autoFocus: false,
              PaperProps: {
                style: {
                  backgroundColor: '#191919',
                  color: 'white',
                },
              },
              IconComponent: () => <Menu style={{ color: 'white' }} />,
            }}
            labelId="search-select-label"
            id="search-select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            onClose={() => setSearchText('')}
            renderValue={() => selectedOption}
            sx={{
              backgroundColor: '#0058FF',
              borderRadius: '5px',
              color: 'white',
              '& .MuiSelect-icon': {
                color: 'white',
              },
            }}
          >
            <ListSubheader sx={{ padding: 0, height: '20px', mb: '35px' }}>
              <TextField
                fullWidth
                placeholder="Type to search..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: 'white', marginRight: '8px' }} />
                    </InputAdornment>
                  ),
                  style: {
                    color: 'white',
                    backgroundColor: '#002b7f', // Adjust this color to match the one in the image
                  },
                }}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key !== 'Escape') {
                    e.stopPropagation();
                  }
                }}
              />
            </ListSubheader>
            {filteredCompanies.map((company, index) => (
              <MenuItem key={index} value={company} sx={{ display: 'flex', alignItems: 'center' }}>
                {company === CompanyEnum.MANAGE_COMPANIES ? (
                  <>
                    <MdOutlinePersonAddAlt style={{ color: 'white', marginRight: '15px' }} />
                    Manage Companies
                  </>
                ) : (
                  <>
                    <AiOutlineCompass style={{ color: 'white', marginRight: '15px' }} />
                    {company}
                  </>
                )}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Menu List */}
      <List>
        <ListItem
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            cursor: 'pointer',
            color: '#191919',
            backgroundColor: selectedItem === 'manage-posts' ? '#FFFFFF' : 'transparent',
            '&:hover': { backgroundColor: '#F9F9F9' },
          }}
          onClick={() => handleNavigation('/manage-posts', 'manage-posts')}
        >
          <ListItemIcon sx={{ minWidth: '40px' }}><Menu /></ListItemIcon>
          <ListItemText primary="Manage Posts" sx={{ color: '#191919' }} />
          <Badge badgeContent={6} showZero sx={{ color: '#9F9F9F' }} />
        </ListItem>

        <ListItem
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            cursor: 'pointer',
            color: '#191919',
            backgroundColor: selectedItem === 'manage-campaigns' ? '#FFFFFF' : 'transparent',
            '&:hover': { backgroundColor: '#F9F9F9' },
          }}
          onClick={() => handleNavigation('/manage-campaigns', 'manage-campaigns')}
        >
          <ListItemIcon sx={{ minWidth: '40px' }}><Menu /></ListItemIcon>
          <ListItemText primary="Manage Campaigns" sx={{ color: '#191919' }} />
          <Badge badgeContent={6} showZero sx={{ color: '#9F9F9F' }} />
        </ListItem>

        <ListItem
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            cursor: 'pointer',
            color: '#191919',
            backgroundColor: selectedItem === 'manage-accounts' ? '#FFFFFF' : 'transparent',
            '&:hover': { backgroundColor: '#F9F9F9' },
          }}
          onClick={() => handleNavigation('/manage-accounts', 'manage-accounts')}
        >
          <ListItemIcon sx={{ minWidth: '40px' }}><Menu /></ListItemIcon>
          <ListItemText primary="Manage Accounts" sx={{ color: '#191919' }} />
          <Badge badgeContent={0} showZero sx={{ color: '#9F9F9F' }} />
        </ListItem>

        <ListItem
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            cursor: 'pointer',
            color: '#191919',
            backgroundColor: selectedItem === 'messaging' ? '#FFFFFF' : 'transparent',
            '&:hover': { backgroundColor: '#F9F9F9' },
          }}
          onClick={() => handleNavigation('/messaging', 'messaging')}
        >
          <ListItemIcon sx={{ minWidth: '40px' }}><Menu /></ListItemIcon>
          <ListItemText primary="Messaging" sx={{ color: '#191919' }} />
          <Badge badgeContent={0} showZero sx={{ color: '#9F9F9F' }} />
        </ListItem>

        <ListItem
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            cursor: 'pointer',
            color: '#191919',
            backgroundColor: selectedItem === 'comments' ? '#FFFFFF' : 'transparent',
            '&:hover': { backgroundColor: '#F9F9F9' },
          }}
          onClick={() => handleNavigation('/comments', 'comments')}
        >
          <ListItemIcon sx={{ minWidth: '40px' }}><Menu /></ListItemIcon>
          <ListItemText primary="Comments" sx={{ color: '#191919' }} />
          <Badge badgeContent={0} showZero sx={{ color: '#9F9F9F' }} />
        </ListItem>
      </List>

      {/* Manage Companies at the bottom */}
      <Box sx={{
        position: 'absolute',
        bottom: '100px',
        width: 'calc(100% - 32px)',
      }}>
        <ListItem
          sx={{
            position: 'absolute',
            bottom: '16px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 16px',
            cursor: 'pointer',
            color: '#191919',
            backgroundColor: selectedItem === 'manage-companies' ? '#FFFFFF' : 'transparent',
            borderRadius: '5px',
            '&:hover': { backgroundColor: '#F9F9F9' },
          }}
          onClick={() => handleNavigation('/manage-companies', 'manage-companies')}
        >
          <ListItemIcon sx={{ minWidth: '40px' }}><Menu /></ListItemIcon>
          <ListItemText primary="Manage Companies" sx={{ color: '#191919' }} />
          <Badge badgeContent={0} showZero sx={{ color: '#9F9F9F' }} />
        </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;
