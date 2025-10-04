import { Grid } from "@mui/material";
import Image from "./common/Image/image";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
}: {
  title: string;
  description: string;
  imgUrl: string;
}) => {
  return (
    <Grid
      container
      item
      justifyContent="center"
      xs={12}
      sm={6}
      md={4}
      mb={2}
      sx={{
        ":hover": {
          cursor: "pointer",
          transform: "scale(1.02)",
        },
      }}
    >
      <Grid item className="proj-imgbx">
        <Image
          loading="lazy"
          effect="opacity"
          alt="imgUrl"
          height="auto"
          src={imgUrl}
          width="95%"
          threshold={100}
          delayTime={300}
        />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </Grid>
    </Grid>
  );
};
