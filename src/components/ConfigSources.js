import { IconButton, useTheme } from "@material-ui/core";
import { PlayCircleFilled } from "@material-ui/icons";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

const ConfigSources = ({ sources }) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {sources.map((item, id) => (
          <div className="sourcesOuterDiv">
            <div>{id}</div>
          </div>
        ))}
      </SwipeableViews>
      <IconButton
        onClick={() => value <= sources.length - 2 && setValue(value + 1)}
      >
        <PlayCircleFilled />
      </IconButton>
    </div>
  );
};

export default ConfigSources;
