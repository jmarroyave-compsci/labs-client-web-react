import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { showBottomSheet } from 'app' 

const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[800],
  boxShadow: '3 3 black',
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[400] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function BottomSheet(props) {
  const dispatch = useDispatch();
  const appState = useSelector(( state ) => state['app'] )
  const { window } = props;

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  const toggleDrawer = (open) => () => {
    if(open === false){
      dispatch( showBottomSheet({ children: null}) )
    }    
  };

  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={appState.bottomSheet.show}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        disableDiscovery={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          style={{
            position: 'absolute',
            top: (appState.bottomSheet.show) ? -drawerBleeding : 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller/>
          <Typography sx={{ p: 2, color: 'text.secondary' }}>{appState.bottomSheet.title?.toUpperCase()}</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          {appState.bottomSheet.children}
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}

BottomSheet.propTypes = {
};

export default BottomSheet;