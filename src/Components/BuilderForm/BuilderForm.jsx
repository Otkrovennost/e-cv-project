import React from 'react'
import "./BuilderForm.scss";
import {
  Button,
  Box,
  Grid,
  TextField,
} from "@material-ui/core";

export default function BuilderForm() {
  return (
    <div className="form">
      <Grid container direction="column" spacing={1} alignItems="stretch">
        <div className="form-group">
          <TextField
            id="desired-job"
            label="Desired Job"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            id="about-yourself"
            label="About Yourself"
            variant="outlined"
            multiline={true}
            rows="10"
          />
        </div>
        <div className="form-group">
          <TextField
            id="job-title"
            label="Job Title"
            variant="outlined"

          />
          <TextField
            id="organization"
            label="Organization"
            variant="outlined"

          />
          <div className="form-group">
            <TextField
              id="date-from"
              type="date"
              variant="outlined"

            />
            <TextField
              id="date-to"
              type="date"
              size="normal"
              variant="outlined"

            />
          </div>
        </div>
        <div className="form-group">
          <TextField
            id="education-place"
            label="Place"
            variant="outlined"

          />
          <TextField
            id="education-degree"
            label="Degree"
            variant="outlined"

          />
          <div className="form-group">
            <TextField
              id="date-from"
              type="date"
              variant="outlined"

            />
            <TextField
              id="date-to"
              type="date"
              size="normal"
              variant="outlined"

            />
          </div>
        </div>
      </Grid>
    </div >
  )
}
