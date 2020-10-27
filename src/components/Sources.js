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
import IngestionBtn from "./IngestionBtn";

const Sources = () => {
  const [social, setSocial] = useState([
    {
      name: "Facebook",
      icon: <Facebook style={{ color: "#7259ff" }} />,
      selected: false,
      inputs: ["asdasd", "asdasd"],
    },
    {
      name: "Twitter",
      icon: <Twitter style={{ color: "#7ac9f9" }} />,
      selected: false,
      inputs: [],
    },
    {
      name: "Youtube",
      icon: <YouTube style={{ color: "#FF0000" }} />,
      selected: false,
      inputs: [],
    },
    {
      name: "Reddit",
      icon: <Reddit style={{ color: "#FF4F0F" }} />,
      selected: false,
      inputs: [],
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

  const deleteLink = (e, id, id1) => {
    let tempSources = sources.map((el, i) => {
      if (i === id) {
        var tempSourcesInputs = el.inputs.map((inEl, j) => {
          if (j !== id1) {
            return inEl;
          }
        });
        return { ...el, inputs: tempSourcesInputs };
      } else return el;
    });
    setSources(tempSources);
  };

  const addLink = (e, val, id) => {
    if (val !== "") {
      let tempSources = sources.map((el, i) => {
        if (i === id) {
          return { ...el, inputs: [...el.inputs, val] };
        } else return el;
      });
      setSources(tempSources);
    }
  };

  return (
    <div style={{ margin: "0 3%" }}>
      <Grid container spacing={3}>
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
                        disabled={configSources}
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
          {sources.length ? (
            <>
              <h3>Configure Sources</h3>
              <ConfigSources
                sources={sources}
                deleteLink={deleteLink}
                addLink={addLink}
              />
            </>
          ) : (
            <></>
          )}
        </Grid>

        {/* Ingestion Button */}
        <Grid item lg={3}>
          <IngestionBtn sources={sources} configSources={configSources} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Sources;
