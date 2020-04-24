import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Home = (props) => {
    const [conference, setConference] = useState("");
    const onStart =()=>{
        props.history.push(`/${conference}`)
    }
    const onSubmit=e=>{
      e.preventDefault();
      onStart();

    }
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: "90vh" }}>
        <div className="row mt-5">
          <div className="col d-flex flex-col align-items-center justify-content-center">
            <h3>Hello there! Create or Join conferences.</h3>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col d-flex flex-row align-items-center justify-content-center">
            <form onSubmit={onSubmit}>
              <TextField
                id="id_meeting"
                label="Conference name"
                variant="outlined"
                value={conference}
                inputProps={{
                  style: {
                    height: 20,
                  },
                }}
                onChange={(e) => setConference(e.target.value)}
              />
              <Button
                style={{
                  height: 55,
                }}
                onClick={onStart}
                variant="contained"
                color="primary"
                size="large"
                className="ml-2"
                type="submit"
              >
                Join
              </Button>
            </form>
          </div>
        </div>
        <p className="text-muted mt-3"><small>New conference will be created if matching conference name is not found.</small></p>
      </div>
    );
}

export default Home;
