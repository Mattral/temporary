// MATERIAL - UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// ==============================|| ABOUT PANEL ||============================== //

const AboutPanel = () => {
  const panelId = 'about';
  const title = 'About Law On Earth';
  const image = 'https://d3hh6raz9l4662.cloudfront.net/media/various/small_talk.png';
  const content = `We believe that every human being has a right to a basic level of legal assistance and education. The hard part has been finding ways to pull the cost out of legal and empower the public to manage their own legal needs to the extent they can. \n
  Our founder Katie Richards grew up in a small country town in North Queensland where there was at the time only one law firm so half the town had representation and everyone else had to fend for themselves. Katie has built up a team of lawyers, developers and entrepreneurs who are equally as passionate about making a difference for the masses and giving every Australian the opportunity to live happier, more fulfilled and safer futures with equal access to legal help when they need it most, regardless of where they live or what they earn.\n
  Research indicates that even in 2019, the majority of the world's population cannot afford or access legal assistance. As a result, people are making decisions involving their legal rights, or making no decisions at all, and this is impacting not only their current life situation but their future also.`;

  return (
    <Box
      id={panelId}
      sx={{
        p: 5,
        background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(100,181,246,1) 100%)',
        minHeight: '100vh'
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h2" align="center" mb={5} sx={{ color: 'rgba(0, 0, 0, 0.87)' }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" style={{ whiteSpace: 'pre-line' }} sx={{ color: 'rgba(0, 0, 0, 0.87)' }}>
              {content}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                alt={title}
                src={image}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPanel;
