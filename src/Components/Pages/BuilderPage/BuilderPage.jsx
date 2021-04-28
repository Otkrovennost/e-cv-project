import React, { useContext, useState, useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Button, IconButton } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../Common/Header/Header';
import BuilderForm from '../../BuilderForm/BuilderForm';

import { CardsContext } from '../../../context/CvContext.js';

import './BuilderPage.scss';

const useStyles = makeStyles((theme) => ({
  buttonShow: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      bottom: '70px',
      right: '20px',
      padding: '20px',
      color: '#fff',
      backgroundColor: 'rgb(114, 172, 145)',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgb(114, 172, 145)',
      },
    },
  },
}));

export default function BuilderPage() {
  const classes = useStyles();
  const [isShownResume, setIsShownResume] = useState(false);

  const { renderCard, selectedCv, cvData, setCvData } = useContext(
    CardsContext
  );

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="builder-page">
      <Header />
      <div className="builder-page__container container" style={{ position: 'relative' }}>
        <div className="builder-page__inner">
          <BuilderForm
            cvData={cvData}
            setCvData={setCvData}
            isShownResume={isShownResume}
          />
          <div
            className={
              isShownResume
                ? 'builder-page__pdf-viewer-view'
                : 'builder-page__pdf-viewer'
            }
          >
            <PDFViewer>{renderCard(selectedCv.cvName)}</PDFViewer>
          </div>
        </div>
        <Button
          className={classes.buttonShow}
          onClick={() => {
            setIsShownResume((prev) => !prev);
          }}
        >
          <AssignmentIcon style={{ color: '#fff', marginRight: '20px' }} />
          {isShownResume ? 'Return to cv-form' : 'Preview & Download'}
        </Button>
      </div>
    </div>
  );
}
