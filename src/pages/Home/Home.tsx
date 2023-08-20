import { Button, Grid, TextField, Typography, colors } from "@mui/material";
// import { makeStyles } from '@mui/styles';
import React, { useState } from "react";

// const useStyles = makeStyles({
//   flexGrow: {
//     flex: '1',
//   },
//   button: {
//     backgroundColor: '#3c52b2',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#fff',
//       color: '#3c52b2',
//   },
// }})

const Home = () => {
  // const classes = useStyles();
  const [passage, setPassage] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnser] = useState<string>("");
  return (
    <Grid container spacing={6} padding={4} sx={{height:'100vh'}}>
      <Grid
        item
        xs={12}
        alignItems={"center"}
        marginY={2}
        justifyContent={"center"}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", color: "#520F9A", fontWeight: "bold", marginBottom:3 }}
        >
          Question Answering
        </Typography>
        <Typography sx={{
          maxWidth:'32em',
          marginX:'auto',
          fontSize:'20px',
          textAlign:'center'
        }}>
        AI-based Question Answering can be used in various use cases and industries. Below is a demo that is just a small sample of what Question Answering tailored to your use case can do.
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={6} >
        <Grid item xs={6}>
          <TextField
            // classes={{ root: classes.customTextField }}
            placeholder="Enter your Paassage here"
            // label="Passage"
            multiline
            rows={20}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#520f9a"
                }

              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Enter question whose answer can be found in passage"
            multiline
            rows={5}
            fullWidth
            disabled={!passage}
            // sx={{ "& input::placeholder": { fontSize: "30px" } }}
          />
          {answer && (
            <Typography
              sx={{
                backgroundColor: "#520F9A",
                color: "white",
                padding: 2,
              }}
            >
              <Typography sx={{ fontSize: "30px", marginBottom: 3 }}>
                Answer
              </Typography>
              {`${answer}`}
            </Typography>
          )}
          <Button
            disabled={!question}
            variant="contained"
            sx={{
              backgroundColor: "#520F9A",
              marginY: "15px",
              paddingY: "20px",
              fontWeight: "bold",
              fontSize: "35px",
              width: "100%",
              "&:hover": {
                backgroundColor: "#520F9A",
                color: "white",
                opacity: 0.8,
              },
            }}
          >
            Get the answer
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
