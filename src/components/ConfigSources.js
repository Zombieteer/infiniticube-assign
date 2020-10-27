import {
  Button,
  Grid,
  IconButton,
  TextField,
  useTheme,
} from "@material-ui/core";
import { CancelOutlined, PlayCircleFilled } from "@material-ui/icons";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

const ConfigSources = ({ sources, deleteLink, addLink }) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [textValue, setTextValue] = useState("");

  return (
    <div>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {sources.map((item, id) => (
          <div className="sourcesOuterDiv" key={id}>
            <div>{item.icon}</div>
            <Grid container className="sourcesInnerDiv">
              <Grid item lg={3}>
                <h4>Username</h4>
              </Grid>
              <Grid item lg={9}>
                <Grid container className="linkStyle">
                  {item.inputs.map((ix, id1) => (
                    <Grid
                      item
                      style={ix ? { display: "flex" } : { display: "none" }}
                      key={id1}
                    >
                      {ix && (
                        <>
                          <h4>{ix}</h4>
                          <CancelOutlined
                            key={id1}
                            onClick={(e) => deleteLink(e, id, id1)}
                            style={{ margin: "5px 15px", cursor: "pointer" }}
                          />
                        </>
                      )}
                    </Grid>
                  ))}
                </Grid>
                <Grid container className="addLinkDiv">
                  <TextField
                    label="Enter Detail"
                    variant="outlined"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                  />
                  <Button
                    color="primary"
                    style={{ width: "30%", padding: 10 }}
                    variant="contained"
                    disableElevation
                    onClick={(e) => addLink(e, textValue, id)}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ))}
      </SwipeableViews>
      <Grid style={{textAlign: 'right'}}>
        <IconButton
          onClick={() => value <= sources.length - 2 && setValue(value + 1)}
        >
          <PlayCircleFilled />
        </IconButton>
        <div>{sources[value + 1] ? sources[value + 1].name : ''}</div>
      </Grid>
    </div>
  );
};

export default ConfigSources;
