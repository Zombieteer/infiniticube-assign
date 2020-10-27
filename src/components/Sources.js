import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
} from "@material-ui/core";
import {
  Facebook,
  YouTube,
  Twitter,
  Reddit,
  ArrowForwardIos,
} from "@material-ui/icons";
import ConfigSources from "./ConfigSources";

const Sources = () => {
  const [social, setSocial] = useState([
    {
      name: "facebook",
      icon: <Facebook style={{ color: "#7259ff" }} />,
      selected: false,
    },
    {
      name: "twitter",
      icon: <Twitter style={{ color: "#7ac9f9" }} />,
      selected: false,
    },
    {
      name: "youtube",
      icon: <YouTube style={{ color: "#FF0000" }} />,
      selected: false,
    },
    {
      name: "discord",
      icon: <Reddit style={{ color: "#FF4F0F" }} />,
      selected: false,
    },
  ]);
  const [sources, setSources] = useState([]);

  const [configSources, setConfigSources] = useState(false);

  const onSelectCheck = (e) => {
    setSocial(
      social.map((item, id) => {
        if (e.target.value === item.name) {
          return { ...item, selected: !item.selected };
        } else return item;
      })
    );
  };

  const configSourcesToggle = () => {
    let tempSources = [];
    social.forEach((item) => {
      if (item.selected === true) tempSources.push(item);
    });
    setSources(tempSources);
    tempSources.length > 0 && setConfigSources(true);
    console.log(sources);
  };

  return (
    <div style={{ margin: "0 3%" }}>
      <Grid container>
        {/* Select sources */}

        <Grid item lg={2}>
          <h3>Select Sources</h3>
          <Grid container className="selectionDiv">
            <FormControl component="fieldset">
              <FormGroup aria-label="position">
                {social.map((item, id) => (
                  <FormControlLabel
                    key={id}
                    value={item.name}
                    control={
                      <Checkbox
                        color="#000"
                        checked={item.selected}
                        onChange={onSelectCheck}
                      />
                    }
                    label={item.icon}
                    labelPlacement="end"
                  />
                ))}
              </FormGroup>
            </FormControl>
            <IconButton onClick={configSourcesToggle}>
              <ArrowForwardIos />
            </IconButton>
          </Grid>
        </Grid>

        {/* Configure Sources */}
        <Grid item lg={6}>
          <h3>Configure Sources</h3>
          <ConfigSources sources={sources} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Sources;
