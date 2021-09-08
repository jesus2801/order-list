import React, { useEffect, useState } from 'react';

import {
  IconButton,
  Drawer,
  Divider,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Backdrop,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import {
  ChevronRight,
  ChevronLeft,
  HomeRounded,
  TuneRounded,
  QuestionAnswerRounded,
  ContactSupportRounded,
} from '@material-ui/icons';
import Link from 'next/link';

const index = () => {
  const [state, setState] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.pathname);
  }, []);

  console.log(url);

  return (
    <>
      <Backdrop open={state} onClick={() => setState(!state)}></Backdrop>
      <IconButton
        onClick={() => setState(!state)}
        color="inherit"
        className={`menu-button${state ? ' active' : ''}`}
      >
        {state ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      <Drawer
        anchor="left"
        className={`drawer${state ? ' active' : ''}`}
        variant="permanent"
      >
        <List component="nav" aria-label="navegación">
          <Divider />
          <ListItem>
            <ListItemAvatar className="avatar">
              <Avatar
                alt="avatar photo"
                src="https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              className="user-name"
              primary="Jesús David García Vargas de luque"
            />
          </ListItem>

          <Divider />
          <Link href="/">
            <ListItem button selected={url === '/'}>
              <ListItemIcon>
                <HomeRounded color="primary" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <Link href="/questions">
            <ListItem button selected={url === '/questions/'}>
              <ListItemIcon>
                <QuestionAnswerRounded color="primary" />
              </ListItemIcon>
              <ListItemText primary="Preguntas" />
            </ListItem>
          </Link>

          <Link href="/settings">
            <ListItem button selected={url === '/settings/'}>
              <ListItemIcon>
                <TuneRounded color="primary" />
              </ListItemIcon>
              <ListItemText primary="Configuración" />
            </ListItem>
          </Link>

          <Divider />
          <Link href="/help">
            <ListItem button selected={url === '/help/'}>
              <ListItemIcon>
                <ContactSupportRounded color="primary" />
              </ListItemIcon>
              <ListItemText primary="Ayuda" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
};

export default index;
