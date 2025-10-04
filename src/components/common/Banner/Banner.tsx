import { useState, useEffect, useCallback, useMemo } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HeaderImg } from "assets";
import { Grid, Link, Typography, useMediaQuery } from "@mui/material";
import { GradientText } from "components/GradientText";
import Image from "../Image/image";
import { theme } from "utils/theme";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const mobileSize = useMediaQuery(theme.breakpoints.down("md"));
  // const [index, setIndex] = useState(1);
  const toRotate = useMemo(() => {
    return [
      "FullStack Developer",
      "FrontEnd Developer",
      "Backend Developer",
      "Mobile Apps Developer",
    ];
  }, []);
  const period = 500;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      // setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setIndex(1);
      setDelta(300);
    } else {
      // setIndex((prevIndex) => prevIndex + 1);
    }
  }, [isDeleting, loopNum, text.length, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, text, tick]);

  return (
    <Grid
      container
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
    >
      <Grid
        item
        xs={12}
        md={6}
        xl={7}
        order={{ xs: 2, md: 1 }}
        px={{ xs: 2, md: 0 }}
        mb={{ xs: 4, md: 0 }}
      >
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: mobileSize ? "center" : "flex-start",
              }}
            >
              <Typography variant="h5">Welcome to my Portfolio</Typography>

              <GradientText
                text="Hey I'm Wassim"
                fontSize={{ xs: "5vw", md: "2.25vw" }}
              />
              <Typography variant="h2" minHeight={62}>
                <span
                  className="txt-rotate"
                  // @ts-ignore
                  dataPeriod="1000"
                  data-rotate='[ "FullStack Developer", "experienced in FrontEnd", "Experienced in Backend","Mobile apps developer ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </Typography>
              <Typography
                variant="h6"
                mb={4}
                textAlign={{ xs: "center", md: "left" }}
              >
                Let's bring your vision to life with cutting-edge development
                and seamless execution.
              </Typography>
              <Link
                href="#contact"
                sx={{
                  fontWeight: "600",
                  color: "#fff",
                  border: "1px solid #fff",
                  height: "fit-content",
                  p: 2,
                  borderRadius: 3,
                }}
              >
                <>
                  Let’s Connect <ArrowRightCircle size={25} />
                </>
              </Link>
            </div>
          )}
        </TrackVisibility>
      </Grid>
      <Grid
        xs={12}
        md={6}
        xl={5}
        order={{ xs: 1, md: 2 }}
        my={{ xs: 10, md: 0 }}
      >
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__zoomIn" : ""}
            >
              <Grid
                item
                xs={12}
                md={10}
                textAlign="center"
                pl={{ xs: 1.5, md: 3 }}
              >
                <Image
                  loading="lazy"
                  effect="opacity"
                  alt="contact"
                  height="auto"
                  src={HeaderImg}
                  width="95%"
                  threshold={100}
                  delayTime={300}
                />
              </Grid>
            </div>
          )}
        </TrackVisibility>
      </Grid>
    </Grid>
  );
};
