import React, {useState} from 'react'
import "./BuilderForm.scss";
import {
  Button,
  Box,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
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

export default function BuilderForm({cvData, setCvData}) {
  const classes = useStyles();

  const setKey = (key, value) => {
    setCvData({ ...cvData, [key]: value })
  }

  const initialFileState = {
    mainState: "initial",
    imageUploaded: 0,
    selectedFile: null
  };

  const [fileState, setFileState] = useState(initialFileState);
  const [skillsArray, setSkillsArray] = useState([]);
  const initEmployment = {
    title: '',
    company: '',
    dateStart: '',
    dateEnd: ''
  };
  const initEducation = {
    place: '',
    degree: '',
    dateStart: '',
    dateEnd: ''
  };
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [educationHistory, setEducationHistory] = useState([]);
  const [employment, setEmployment] = useState(initEmployment);
  const [education, setEducation] = useState(initEducation);

  const setEmploymentData = (key, value) => {
    setEmployment({ ...employment, [key]: value })
  };

  const setEducationData = (key, value) => {
    setEducation({ ...education, [key]: value })
  };


  const setEmploymentHistoryData = () => {
    setEmploymentHistory( prev => [...employmentHistory, employment])
    setCvData({ ...cvData, employmentHistory: [...employmentHistory, employment] })
    setEmployment(initEmployment)
    console.log(employment)
    console.log(employmentHistory)
  }

  const setEducationHistoryData = () => {
    setEducationHistory( prev => [...educationHistory, education])
    setCvData({ ...cvData, educationHistory: [...educationHistory, education] })
    setEducation(initEducation)
    console.log(education)
    console.log(educationHistory)
  }

  const employmentItem = (p, i) => {
    const { title, company, dateStart, dateEnd} = p;
    return (
      <ListItem key={i}>
        <Grid container justify='space-between'>
          <Grid item>
            <ListItemText primary={title} secondary={company} />
          </Grid>
          <Grid item>
            <ListItemText primary={dateStart} secondary={dateEnd} />
          </Grid>
        </Grid>
      </ListItem>
    )
  };

  const educationItem = (p, i) => {
    const { place, degree, dateStart, dateEnd} = p;
    return (
      <ListItem key={i}>
        <Grid container justify='space-between'>
          <Grid item>
            <ListItemText primary={place} secondary={degree} />
          </Grid>
          <Grid item>
            <ListItemText primary={dateStart} secondary={dateEnd} />
          </Grid>
        </Grid>
      </ListItem>
    )
  };

  const addSkill = (value) => {
    setSkillsArray(prev => [...prev, value])
  }

  const deleteSkill = (value) => {
    setSkillsArray(prev => prev.filter(elem => elem !== value));
  };

  const { title,  name, surname, email, phone, summary } = cvData;

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
              cvData={cvData} 
              setCvData={setCvData}
            />
        </Grid>
        <div className="form-group">
          <TextField
            id="desired-job"
            label="Job title"
            value={title}
            onChange={({ target: { value } }) => { setKey('title', value) }}
            variant="outlined"
            style={{width: '100%'}}
          />
        </div>
        <div className="form-group">
          <TextField
            id="first-name"
            label="First Name"
            value={name}
            onChange={({ target: { value } }) => { setKey('name', value) }}
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="last-name"
            label="Last Name"
            value={surname}
            onChange={({ target: { value } }) => { setKey('surname', value) }}
            variant="outlined"
            className={classes.formItem}
          />
        </div>
        <div className="form-group">
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={({ target: { value } }) => { setKey('email', value) }}
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="phone"
            label="Phone"
            value={phone}
            onChange={({ target: { value } }) => { setKey('phone', value) }}
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
            value={summary}
            onChange={({ target: { value } }) => { setKey('summary', value) }}
            placeholder="About yourself"
            multiline
            variant="outlined"
            style={{width: '100%'}}
          />
        </div>
        <Typography variant="h6" className={classes.sectionTitle}>
          Experience History
        </Typography>
        <div className="form-group">
          <TextField
            id="job-title"
            label="Job Title"
            value={employment.title}
            onChange={({ target: { value } }) => { setEmploymentData('title', value) }}
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="organization"
            label="Organization"
            variant="outlined"
            value={employment.company}
            onChange={({ target: { value } }) => { setEmploymentData('company', value) }}
            className={classes.formItem}
          />
        </div>
        <div className="form-group">
          <TextField
            id="date-from"
            type="date"
            variant="outlined"
            value={employment.dateStart}
            onChange={({ target: { value } }) => { setEmploymentData('dateStart', value) }}
            className={classes.formItem}
          />
          <TextField
            id="date-to"
            type="date"
            size="normal"
            variant="outlined"
            value={employment.dateEnd}
            onChange={({ target: { value } }) => { setEmploymentData('dateEnd', value) }}
            className={classes.formItem}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{marginBottom: '20px'}}
          onClick={setEmploymentHistoryData}
        >
          Add employment
        </Button>
        <List>
          {employmentHistory.map(employmentItem)}
        </List>
        <Typography variant="h6" className={classes.sectionTitle}>
          Education
        </Typography>
        <div className="form-group">
          <TextField
            id="education-place"
            label="Place"
            value={education.place}
            onChange={({ target: { value } }) => {setEducationData('place', value) }}
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="education-degree"
            label="Degree"
            value={education.degree}
            onChange={({ target: { value } }) => {setEducationData('degree', value) }}
            variant="outlined"
            className={classes.formItem}
          />
        </div>
        <div className="form-group">
          <TextField
            id="date-from"
            type="date"
            value={education.dateStart}
            onChange={({ target: { value } }) => {setEducationData('dateStart', value) }}
            variant="outlined"
            className={classes.formItem}
          />
          <TextField
            id="date-to"
            type="date"
            value={education.dateEnd}
            onChange={({ target: { value } }) => {setEducationData('dateEnd', value) }}
            size="normal"
            variant="outlined"
            className={classes.formItem}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{marginBottom: '20px'}}
          onClick={setEducationHistoryData}
        >
          Add education
        </Button>
        <List>
          {educationHistory.map(educationItem)}
        </List>
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
            <React.Fragment>
              <NewUserSkill
                addSkill={addSkill}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCvData({ 
                    ...cvData, 
                    skills: skillsArray })
                }}
              >
                Add skills in cv
              </Button>
            </React.Fragment>
            :
            <React.Fragment/>
          }
        </Grid>
      </Grid>
    </form >
  )
}
