import React, {useState} from 'react'
import "./BuilderForm.scss";
import {
  Button,
  Box,
  Grid,
  Icon,
  IconButton,
  TextField,
  Typography
} from "@material-ui/core";
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { makeStyles } from "@material-ui/core/styles";

import AvatarCustom from '../Common/Avatar/Avatar';

const useStyles = makeStyles((theme) => ({
  avatarBlock: {
    display: 'flex', 
    flexWrap: 'wrap'
  },
  sectionTitle: {
    width: '100%', 
    marginBottom: 12, 
    fontWeight: 600
  },
  formItem: {
    width: '45%'
  }, 
  skillsSection: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  skillsItem: {
    marginRight: '15px',
    marginBottom: '15px'
  },
  userSkillsSection: {
    display: 'flex',
    flexDirection: 'column'
  },
  userSkillBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid rgba(0, 0, 0, 0.23)'
  },
  userSkill: {
    width: '100%',
  },
  userSkillIcon: {
    marginLeft: 'auto'
  }
}));

const skillArray = ['HTML', 'CSS', 'JavaScript', 'Git', 'React', 'Redux', 'Node.js', 'Figma', 'TypeScript'];

const SkillItem = ({value, addSkill}) => {
  const classes = useStyles();
  return (
    <Chip
      icon={<AddIcon/>}
      label={value}
      color="primary"
      variant="outlined"
      clickable
      onClick={() => {
        addSkill(value)
      }}
      className={classes.skillsItem}
    />
  )
};

const UserSkill = ({value, deleteSkill}) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.userSkillBlock}>
      <Typography className={classes.userSkill}>{value}</Typography>
      <IconButton
        onClick={() => {
          deleteSkill(value)
        }}
      >
        <DeleteOutlineIcon color="primary" className={classes.userSkillIcon}/>
      </IconButton>
    </Grid>
  )
};

const NewUserSkill = ({addSkill}) => {
  const classes = useStyles();

  const [value, setValue] = useState('');

  return (
    <div className="form-group">
      <TextField
        id="desired-job"
        label="Enter skill"
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value)
        }}
        variant="outlined"
        style={{width: '80%'}}
      />
      <IconButton
        onClick={() => {
          addSkill(value)
          setValue('')
        }}
        style={{padding: '15px'}}
      >
        <AddIcon color="primary" className={classes.userSkillIcon}/>
      </IconButton>
    </div>
  )
};

export default function BuilderForm() {
  const classes = useStyles();

  const initialFileState = {
    mainState: "initial",
    imageUploaded: 0,
    selectedFile: null
  };

  const [fileState, setFileState] = useState(initialFileState);
  const [skillsArray, setSkillsArray] = useState([]);

  const addSkill = (value) => {
    setSkillsArray(prev => [...prev, value])
  }

  const deleteSkill = (value) => {
    setSkillsArray(prev => prev.filter(elem => elem !== value));
  };

  return (
    <form className="form">
      <Grid container direction="column" spacing={1} alignItems="stretch">
        <Grid item className={classes.avatarBlock}>
          <Typography variant="h6" className={classes.sectionTitle}>
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
            className={classes.formItem}
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            className={classes.formItem}
          />
        </div>
        <div className="form-group">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            className={classes.formItem}
          />
        </div>
        <Typography variant="h6" className={classes.sectionTitle}>
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
        <Typography variant="h6" className={classes.sectionTitle}>
          Employment History
        </Typography>
        <div className="form-group">
          <TextField
            id="job-title"
            label="Job Title"
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="organization"
            label="Organization"
            variant="outlined"
            className={classes.formItem}
          />
        </div>
        <div className="form-group">
          <TextField
            id="date-from"
            type="date"
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="date-to"
            type="date"
            size="normal"
            variant="outlined"
            className={classes.formItem}
          />
        </div>
        <Typography variant="h6" className={classes.sectionTitle}>
          Education
        </Typography>
        <div className="form-group">
          <TextField
            id="education-place"
            label="Place"
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="education-degree"
            label="Degree"
            variant="outlined"
            className={classes.formItem}
          />
        </div>
        <div className="form-group">
          <TextField
            id="date-from"
            type="date"
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="date-to"
            type="date"
            size="normal"
            variant="outlined"
            className={classes.formItem}
          />
        </div>
        <Typography variant="h6" className={classes.sectionTitle}>
          Skills
        </Typography>
        <Grid item className={classes.skillsSection}>
          {skillArray.map((elem, i) => (
            <SkillItem
              key={i}
              value={elem}
              addSkill={addSkill}
            />
          ))}
        </Grid>
        <Grid item className={classes.userSkillsSection}>
          {skillsArray.map((elem, i) => (
            <UserSkill
              key={i}
              value={elem}
              deleteSkill={deleteSkill}
            />
          ))}
          {skillsArray.length !== 0 ? 
            <NewUserSkill
              addSkill={addSkill}
            />
            :
            <React.Fragment/>
          }
        </Grid>
      </Grid>
    </form >
  )
}
