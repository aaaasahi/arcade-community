import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "25px",
  },
  label: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  titleForm: {
    margin: "10px 0 40px",
  },
  textForm: {
    margin: "10px 0 40px",
  },
  button: {
    textAlign: "center",
  },
}));

export const CreateCommunity = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const history = useHistory();
  const classes = useStyles();

  const save = () => {
    const data = {
      title: title,
      text: text,
    };

    axios
      .post("http://localhost:8000/api/communities", data, {
        headers: JSON.parse(localStorage.user),
      })
      .then((res) => {
        console.log(res.data);
        history.push("/IndexCommunity");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.title}>コミュニティ作成</div>
        <label className={classes.label}>・コミュニティ名(必須)</label>
        <div>
          <TextField
            type="text"
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            variant="outlined"
            className={classes.titleForm}
          />
        </div>
        <label className={classes.label}>・コミュニティ説明(必須)</label>
        <TextField
          type="text"
          multiline={true}
          rows={10}
          fullWidth
          value={text}
          onChange={(event) => setText(event.target.value)}
          variant="outlined"
          className={classes.textForm}
        />
        <div className={classes.button}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={save}
          >
            作成
          </Button>
        </div>
      </div>
    </Container>
  );
};
