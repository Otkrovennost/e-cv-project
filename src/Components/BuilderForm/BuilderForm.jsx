import React, {useState} from 'react'
import "./BuilderForm.scss";
import {
  Button,
  Box,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";

import AvatarCustom from '../Common/Avatar/Avatar';

export default function BuilderForm() {
  const initialFileState = {
    mainState: "initial",
    imageUploaded: 0,
    selectedFile: null
  };

  const [fileState, setFileState] = useState(initialFileState);

  return (
    <form className="form">
      <Grid container direction="column" spacing={1} alignItems="stretch">
        <Grid item style={{display: 'flex', flexWrap: 'wrap'}}>
          <Typography variant="h6" style={{width: '100%', marginBottom: 12, fontWeight: 600}}>
            Personal Details
          </Typography>
          <AvatarCustom
              fileState={fileState}
              setFileState={setFileState}
              avatarSrc={fileState.selectedFile}
            />
        </Grid>
        <div className="form-group">
          <TextField
            id="desired-job"
            label="Job title"
            variant="outlined"
            style={{width: '100%'}}
          />
        </div>
        <div className="form-group">
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            style={{width: '45%'}}
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            style={{width: '45%'}}
          />
        </div>
        <div className="form-group">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            style={{width: '45%'}}
          />
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            style={{width: '45%'}}
          />
        </div>
        <Typography variant="h6" style={{width: '100%', marginBottom: 12, fontWeight: 600}}>
          Professional Summary
        </Typography>
        <div className="form-group">
          <TextField
            id="about"
            label="About yourself"
            placeholder="About yourself"
            multiline
            variant="outlined"
            style={{width: '100%'}}
          />
        </div>
        <Typography variant="h6" style={{width: '100%', marginBottom: 12, fontWeight: 600}}>
          Employment History
        </Typography>
        <div className="form-group">
          <TextField
            id="job-title"
            label="Job Title"
            variant="outlined"
            style={{width: '45%'}}
          />
          <TextField
            id="organization"
            label="Organization"
            variant="outlined"
            style={{width: '45%'}}
          />
        </div>
        <div className="form-group">
          <TextField
            id="date-from"
            type="date"
            variant="outlined"
            style={{width: '45%'}}
          />
          <TextField
            id="date-to"
            type="date"
            size="normal"
            variant="outlined"
            style={{width: '45%'}}
          />
        </div>
        <Typography variant="h6" style={{width: '100%', marginBottom: 12, fontWeight: 600}}>
          Education
        </Typography>
        <div className="form-group">
          <TextField
            id="education-place"
            label="Place"
            variant="outlined"
            style={{width: '45%'}}
          />
          <TextField
            id="education-degree"
            label="Degree"
            variant="outlined"
            style={{width: '45%'}}
          />
        </div>
        <div className="form-group">
          <TextField
            id="date-from"
            type="date"
            variant="outlined"
            style={{width: '45%'}}
          />
          <TextField
            id="date-to"
            type="date"
            size="normal"
            variant="outlined"
            style={{width: '45%'}}
          />
        </div>
      </Grid>
    </form >
  )
}
