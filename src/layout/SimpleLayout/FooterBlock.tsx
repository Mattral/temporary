'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { motion } from 'framer-motion';
import { Facebook } from 'iconsax-react';
import Button from '@mui/material/Button';
// link - custom style
import { styled, useTheme } from '@mui/material/styles';
import Logo from 'components/logo';

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover, &:active': {
    color: theme.palette.primary.main,
  },
}));

type ShowProps = {
  isFull?: boolean;
};

type EditableFooterItem = {
  text: string;
  url: string;
};

const initialFooterItems: EditableFooterItem[] = [
  { text: 'Discover Law On Earth for Clients', url: '#' },
  { text: 'Discover Law On Earth for Advisors', url: '#' },
  { text: 'How to join as an advisor', url: '#' },
  { text: 'Help', url: '#' },
  { text: 'Address: Level 54, 111 Eagle Street, Brisbane City, Qld, 4000', url: '#' },
  { text: 'Support & Enquiries: 1300 66 46 88', url: '#' },
  { text: 'Email Us: hello@lawonearth.com', url: '#' },
  { text: 'Privacy Policy', url: '#' },
  { text: 'Customer Terms', url: '#' },
  { text: 'Advisor Terms', url: '#' },
];

const FooterBlock = ({ isFull }: ShowProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [editableItems, setEditableItems] = useState<EditableFooterItem[]>(initialFooterItems);
  const [formValues, setFormValues] = useState<EditableFooterItem[]>(initialFooterItems);

  const handleClickOpen = () => {
    setFormValues(editableItems);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (index: number, field: keyof EditableFooterItem, value: string) => {
    const updatedFormValues = [...formValues];
    updatedFormValues[index] = { ...updatedFormValues[index], [field]: value };
    setFormValues(updatedFormValues);
  };

  const handleSave = () => {
    setEditableItems(formValues);
    setOpen(false);
  };

  const linkSX = {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1',
    },
  };

  return (
    <>
      <Box sx={{ pt: isFull ? 0 : 10, pb: 10 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <Grid item xs={12}>
                    <Logo reverse to="/" />
                  </Grid>
                  <Typography variant="h5">
                      <br/>
                    </Typography>
                    <Typography variant="body1">
                      A way to connect the world and make legal services accessible to everyone. The Law On Earth
                      portal contains 100's of legal documents and guidance sheets so that clients can self-service
                      yet also receive advice packages depending on their subscription level.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={{ xs: 5, md: 2 }}>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Useful Links</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      {editableItems.slice(0, 4).map((item, index) => (
                        <FooterLink key={index} href={item.url} target="_blank" underline="none">
                          {item.text}
                        </FooterLink>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Help & Support</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      {editableItems.slice(4, 7).map((item, index) => (
                        <FooterLink key={index} href={item.url} target="_blank" underline="none">
                          {item.text}
                        </FooterLink>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Resources</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      {editableItems.slice(7, 10).map((item, index) => (
                        <FooterLink key={index} href={item.url} target="_blank" underline="none">
                          {item.text}
                        </FooterLink>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Edit
        </Button>
      </Box>
      <Box sx={{ py: 2.4, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8}>
              <Typography>
                Copyright © 2024{' '}
                <Link href="#" underline="none">
                  Law On Earth IP Pty Ltd
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Grid item>
                  <Link underline="none" sx={linkSX}>
                    <Facebook size="22" variant="Bulk" />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Edit Footer Links</DialogTitle>
        <DialogContent>
          {formValues.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Text"
                value={item.text}
                onChange={(e) => handleChange(index, 'text', e.target.value)}
                sx={{ mb: 1 }}
              />
              <TextField
                fullWidth
                label="URL"
                value={item.url}
                onChange={(e) => handleChange(index, 'url', e.target.value)}
                sx={{ mb: 2 }}
              />
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FooterBlock;



/*
// MATERIAL - UI
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// THIRD - PARTY
import { motion } from 'framer-motion';

// PROJECT IMPORTS
import Logo from 'components/logo';

// ASSETS
import { Facebook } from 'iconsax-react';

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover, &:active': {
    color: theme.palette.primary.main
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

type showProps = {
  isFull?: boolean;
};

const FooterBlock = ({ isFull }: showProps) => {
  const theme = useTheme();

  const linkSX = {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    opacity: '0.6',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  };

  return (
    <>
      <Box sx={{ pt: isFull ? 0 : 10, pb: 10 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Logo reverse to="/" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                    A way to connect the world and make legal services accessible to everyone. 
                    The Law On Earth portal contains 100&apos;s of legal documents and guidance sheets 
                    so that clients can self-service yet also receive advice packages depending on their subscription level.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={{ xs: 5, md: 2 }}>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Useful Links</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="#" target="_blank" underline="none">
                        Discover Law On Earth for Clients
                      </FooterLink>
                      <FooterLink href="#" target="_blank" underline="none">
                        Discover Law On Earth for Advisors
                      </FooterLink>
                      <FooterLink href="#" target="_blank" underline="none">
                        How to join as an advisor
                      </FooterLink>
                      <FooterLink href="#" target="_blank" underline="none">
                        Help
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Help & Support</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="#" target="_blank" underline="none">
                        Address: Level 54, 111 Eagle Street, Brisbane City, Qld, 4000
                      </FooterLink>
                      <FooterLink href="#" target="_blank" underline="none">
                        Support & Enquiries: 1300 66 46 88
                      </FooterLink>
                      <FooterLink href="#" target="_blank" underline="none">
                        Email Us: hello@lawonearth.com
                      </FooterLink>
                      
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Stack spacing={3}>
                    <Typography variant="h5">Resources</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink href="#" target="_blank" underline="none">
                        Privacy Policy
                      </FooterLink>
                      <FooterLink href="#" target="_blank" underline="none">
                        Customer Terms
                      </FooterLink>
                      <FooterLink href="#" target="_blank" underline="none">
                        Advisor Terms
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 2.4, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8}>
              <Typography>
                Copyright © 2024{' '}
                <Link href="#" underline="none">
                  {' '}
                  Law On Earth IP Pty Ltd
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Grid item>
                  <Link underline="none" sx={linkSX}>
                    <Facebook size="22" variant="Bulk" />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterBlock;
*/