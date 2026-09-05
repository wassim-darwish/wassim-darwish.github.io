import { Box, Card, Chip, Stack, Typography } from "@mui/material";
import { Project } from "./constants/projects";

export const ProjectCard = ({
  title,
  company,
  category,
  description,
  stack,
  imgUrl,
}: Project) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition:
          "transform 400ms cubic-bezier(0.22, 1, 0.36, 1), border-color 400ms ease, box-shadow 400ms ease",
        "&:hover": {
          transform: "translateY(-8px)",
          borderColor: "rgba(198, 66, 110, 0.55)",
          boxShadow: "0 30px 60px -32px rgba(198, 66, 110, 0.95)",
        },
        "&:hover .project-media": { transform: "scale(1.06)" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "16 / 10",
          backgroundColor: "rgba(148, 137, 167, 0.08)",
        }}
      >
        <Box
          component="img"
          className="project-media"
          src={imgUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(18,15,23,0) 35%, rgba(18,15,23,0.92) 100%)",
          }}
        />
        <Chip
          label={category}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "linear-gradient(242deg, #642B73 16.55%, #C6426E 93.07%)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.6875rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        />
      </Box>

      <Stack spacing={1.25} sx={{ p: { xs: 2.5, md: 3 }, flexGrow: 1 }}>
        <Box>
          <Typography variant="h4" component="h3" sx={{ lineHeight: 1.3 }}>
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary.main"
            sx={{ fontFamily: "Outfit", mt: 0.5 }}
          >
            {company}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="secondary.main"
          sx={{ fontWeight: 300, flexGrow: 1 }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, pt: 0.5 }}>
          {stack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                borderRadius: "0.5rem",
                backgroundColor: "rgba(148, 137, 167, 0.1)",
                border: "1px solid rgba(148, 137, 167, 0.18)",
                color: "common.white",
                fontSize: "0.6875rem",
              }}
            />
          ))}
        </Box>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
