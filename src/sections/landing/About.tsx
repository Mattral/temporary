// MATERIAL - UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// THIRD - PARTY
import { useState } from 'react';

// ==============================|| ABOUT PANEL ||============================== //

const AboutPanel = () => {
  const panelId = 'about';
  const title = 'About Law On Earth';
  const image = 'https://d3hh6raz9l4662.cloudfront.net/media/various/small_talk.png';

  const initialText1 = "We believe that every human being has a right to a basic level of legal assistance and education. The hard part has been finding ways to pull the cost out of legal and empower the public to manage their own legal needs to the extent they can.";
  const initialText2 = "Our founder Katie Richards grew up in a small country town in North Queensland where there was at the time only one law firm so half the town had representation and everyone else had to fend for themselves. Katie has built up a team of lawyers, developers and entrepreneurs who are equally as passionate about making a difference for the masses and giving every Australian the opportunity to live happier, more fulfilled and safer futures with equal access to legal help when they need it most, regardless of where they live or what they earn.";
  const initialText3 = "Research indicates that even in 2019, the majority of the world's population cannot afford or access legal assistance. As a result, people are making decisions involving their legal rights, or making no decisions at all, and this is impacting not only their current life situation but their future also.";

  const [text1, setText1] = useState(initialText1);
  const [text2, setText2] = useState(initialText2);
  const [text3, setText3] = useState(initialText3);
  const [isEditing, setIsEditing] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleEditClick = (index) => {
    setIsEditing(true);
    setHoverIndex(index);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setHoverIndex(null);
    // Here you could also send the updated text to a server if needed
  };

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
            <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.87)', whiteSpace: 'pre-line' }}>
              {isEditing && hoverIndex === 1 ? (
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  value={text1}
                  onChange={(e) => setText1(e.target.value)}
                  variant="outlined"
                />
              ) : (
                <Box
                  onMouseEnter={() => setHoverIndex(1)}
                  onMouseLeave={() => setHoverIndex(null)}
                  sx={{ position: 'relative' }}
                >
                  {text1}
                  {hoverIndex === 1 && !isEditing && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleEditClick(1)}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform: 'translateY(-100%)',
                        marginBottom: '8px',
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </Box>
              )}
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.87)', whiteSpace: 'pre-line', mt: 3 }}>
              {isEditing && hoverIndex === 2 ? (
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                  variant="outlined"
                />
              ) : (
                <Box
                  onMouseEnter={() => setHoverIndex(2)}
                  onMouseLeave={() => setHoverIndex(null)}
                  sx={{ position: 'relative' }}
                >
                  {text2}
                  {hoverIndex === 2 && !isEditing && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleEditClick(2)}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform: 'translateY(-100%)',
                        marginBottom: '8px',
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </Box>
              )}
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, 0.87)', whiteSpace: 'pre-line', mt: 3 }}>
              {isEditing && hoverIndex === 3 ? (
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  value={text3}
                  onChange={(e) => setText3(e.target.value)}
                  variant="outlined"
                />
              ) : (
                <Box
                  onMouseEnter={() => setHoverIndex(3)}
                  onMouseLeave={() => setHoverIndex(null)}
                  sx={{ position: 'relative' }}
                >
                  {text3}
                  {hoverIndex === 3 && !isEditing && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleEditClick(3)}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform: 'translateY(-100%)',
                        marginBottom: '8px',
                      }}
                    >
                      Edit
                    </Button>
                  )}
                </Box>
              )}
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
          {isEditing && (
            <Grid item xs={12}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleSaveClick}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPanel;
