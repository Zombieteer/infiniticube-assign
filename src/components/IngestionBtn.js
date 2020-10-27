import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const IngestionBtn = ({ sources, configSources }) => {
  const [disp, setDisp] = useState(false);

  useEffect(() => {
    let count = 0;
    sources.forEach((el, id) => {
      if (el.inputs.length !== 0) {
        count += 1;
      }
    });
    if (count === sources.length && sources.length !== 0) setDisp(true)
    else if(count !== sources.length) setDisp(false);
  }, [sources]);

  return (
    <Grid
      container
      style={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      {disp ? (
        <Button variant="contained" color="primary">
          START INGESTION
        </Button>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default IngestionBtn;
