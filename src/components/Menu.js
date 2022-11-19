import React, { useContext } from 'react'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuMui from '@mui/material/Menu';

import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import FlagIcon from '@mui/icons-material/Flag';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';

import UserContext from '../context/user/userContext';
import Report from './Report';

const Menu = (props) => {

    const context = useContext(UserContext)
    const { user } = context;



    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const [openModal, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    
    const handleCloseModal = () => setOpen(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleReport = () => {
        handleOpenModal();
        handleClose()
    }
    const handleShare = () => {
        // TODO: share function
    }

    return (
        <>

            <IconButton
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <MenuMui
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {user &&
                    <MenuItem onClick={handleReport}>
                        <ListItemIcon>
                            <FlagIcon color='error' />
                        </ListItemIcon>
                        <ListItemText >Report</ListItemText>
                    </MenuItem>
                }
                <MenuItem onClick={handleShare}>
                    <ListItemIcon>
                        <ShareIcon color='primary' />
                    </ListItemIcon>
                    <ListItemText >Share</ListItemText>
                </MenuItem>
            </MenuMui>
            <Report
                open={openModal} 
                handleOpen={handleOpenModal} 
                setOpen={setOpen} 
                handleClose={handleCloseModal}
                id={props.reportID}
                of={props.of}/>
        </>
    )
}

export default Menu 