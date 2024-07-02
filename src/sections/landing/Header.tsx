'use client';

// NEXT
import Link from 'next/link';

// MATERIAL - UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//import Links from '@mui/material/Link';
import Rating from '@mui/material/Rating';
//import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// THIRD - PARTY
import { motion } from 'framer-motion';

// ASSETS
import AnimateButton from 'components/@extended/AnimateButton';
/*
const techBootstrap = '/assets/images/landing/tech-bootstrap.svg';
const techReact = '/assets/images/landing/tech-react.svg';
const techCodeigniter = '/assets/images/landing/tech-codeigniter.svg';
const techNet = '/assets/images/landing/tech-net.svg';
const techFigma = '/assets/images/landing/tech-figma.svg';
const techVue = 'assets/images/landing/tech-vuetify.svg';
const tehAngular = 'assets/images/landing/tech-angular.svg';
const techNextJS = 'assets/images/landing/tech-nextjs.svg';
*/

// ==============================|| LANDING - HeaderPage ||============================== //

const HeaderPage = () => {
  const theme = useTheme();

  //let value: string = window.location.search;
  //const params = new URLSearchParams(value);
  //sconst ispValue = params.get('isp');

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 17 } }}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3} sx={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' }, fontWeight: 700, lineHeight: 1.2 }}
                >
                  <span>Making </span>
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169), rgb(37, 161, 244)) 0 0 / 400% 100%',
                      color: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      animation: 'move-bg 24s infinite linear',
                      '@keyframes move-bg': {
                        '100%': {
                          backgroundPosition: '400% 0'
                        }
                      }
                    }}
                  >
                    <span>Legal Services </span>
                  </Box>
                  <span> accessible for everyone.</span>
                </Typography>
              </motion.div>
            </Grid>
            <Grid container justifyContent="center" item xs={12}>
              <Grid item xs={8}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.2
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, fontWeight: 400, lineHeight: { xs: 1.4, md: 1.4 } }}
                  >
                    Browse the Learning Centre to access hundreds of articles & guides. Prepare documents & contracts in just a few clicks. 
                    Connect with legal advisors in affordable video sessions. 
                    With Law On Earth, you'll be able to understand your legal matter and self-act safely and affordably.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <AnimateButton>
                      <Button component={Link} href="/components-overview/buttons" size="large" color="secondary" variant="outlined">
                        Book a Demo
                      </Button>
                    </AnimateButton>
                  </Grid>
                  <Grid item>
                    <AnimateButton>
                      <Button component={Link} href="/login" target="_blank" size="large" color="primary" variant="contained">
                        Sign up
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.6
                }}
              >
                <Grid container spacing={3} justifyContent="center">
                  <Grid
                    item
                    sx={{
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        height: 30,
                        bottom: 10,
                        left: 'auto',
                        right: '-12px',
                        width: '1px',
                        bgcolor: 'divider'
                      }
                    }}
                  >
                    <Rating name="read-only" value={4.5} size="small" readOnly />
                    <Typography variant="h4">
                      4.7/5
                      <span
                        style={{
                          fontSize: '75%',
                          fontWeight: 400,
                          margin: 5,
                          color: theme.palette.text.secondary
                        }}
                      >
                        Ratings
                      </span>
                    </Typography>
                  </Grid>
                  
                </Grid>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          bottom: { xs: -30, sm: 0 },
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`
        }}
      >
        
      </Box>
    </Container>
  );
};
export default HeaderPage;

/*
import { AboutPanelInterface } from "./LandingPageData.interface";

export default function AboutPanel(props: AboutPanelInterface) {
  return (
    <section className="p-5" id={props.panelId ? props.panelId : ""}>
      <h2 className="text-center mb-5">{props.title}</h2>

      <section className="container">
        <section className="row">
          <div className="col-md-6 overflow-hidden">
            <img
              alt={props.image}
              src={props.image}
              className="img-fluid d-block"
            />
          </div>
          <div
            className="col-md-6 p-3 overflow-hidden"
            style={{
              backgroundColor: "rgba(var(--bs-secondary-rgb), 0.1)",
              whiteSpace: "pre-line",
            }}
          >
            {props.content}
          </div>
        </section>
      </section>
    </section>
  );
}
*/