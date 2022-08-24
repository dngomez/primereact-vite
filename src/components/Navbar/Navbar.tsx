import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Chip } from 'primereact/chip';

export default function MenubarDemo() {
  let auth = useContext(AuthContext);
  let navigate = useNavigate();

  const [theme, setTheme] = useState("lara-light-indigo")

  const logout = () => auth.signout();

  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            }
          ]
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },
    {
      label: 'Components',
      icon: 'pi pi-fw pi-prime',
      items: [
        {
          label: 'Table',
          icon: 'pi pi-fw pi-table',
          command: () => navigate('demo/table')
        },
        {
          label: 'Calendar',
          icon: 'pi pi-fw pi-calendar',
          command: () => navigate('demo/calendar')
        }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Left',
          icon: 'pi pi-fw pi-align-left'
        },
        {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right'
        },
        {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center'
        },
        {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify'
        },

      ]
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus',

        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus',

        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List'
            }
          ]
        }
      ]
    },
    {
      label: 'Themes',
      icon: 'pi pi-fw pi-palette',
      items: [
        { label: "arya-blue", icon: 'pi pi-fw pi-sun', command: () => changeTheme("arya-blue") },
        { label: "arya-green", icon: 'pi pi-fw pi-sun', command: () => changeTheme("arya-green") },
        { label: "arya-orange", icon: 'pi pi-fw pi-sun', command: () => changeTheme("arya-orange") },
        { label: "arya-purple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("arya-purple") },
        { label: "bootstrap4-dark-blue", icon: 'pi pi-fw pi-sun', command: () => changeTheme("bootstrap4-dark-blue") },
        { label: "bootstrap4-dark-purple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("bootstrap4-dark-purple") },
        { label: "bootstrap4-light-blue", icon: 'pi pi-fw pi-sun', command: () => changeTheme("bootstrap4-light-blue") },
        { label: "bootstrap4-light-purple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("bootstrap4-light-purple") },
        { label: "fluent-light", icon: 'pi pi-fw pi-sun', command: () => changeTheme("fluent-light") },
        { label: "lara-dark-blue", icon: 'pi pi-fw pi-sun', command: () => changeTheme("lara-dark-blue") },
        { label: "lara-dark-indigo", icon: 'pi pi-fw pi-sun', command: () => changeTheme("lara-dark-indigo") },
        { label: "lara-dark-purple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("lara-dark-purple") },
        { label: "lara-dark-teal", icon: 'pi pi-fw pi-sun', command: () => changeTheme("lara-dark-teal") },
        { label: "lara-light-blue", icon: 'pi pi-fw pi-sun', command: () => changeTheme("lara-light-blue") },
        { label: "lara-light-indigo", icon: 'pi pi-fw pi-sun', command: () => changeTheme("lara-light-indigo") },
        { label: "lara-light-purple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("lara-light-purple") },
        { label: "lara-light-teal", icon: 'pi pi-fw pi-sun', command: () => changeTheme("lara-light-teal") },
        { label: "luna-amber", icon: 'pi pi-fw pi-sun', command: () => changeTheme("luna-amber") },
        { label: "luna-blue", icon: 'pi pi-fw pi-sun', command: () => changeTheme("luna-blue") },
        { label: "luna-green", icon: 'pi pi-fw pi-sun', command: () => changeTheme("luna-green") },
        { label: "luna-pink", icon: 'pi pi-fw pi-sun', command: () => changeTheme("luna-pink") },
        { label: "md-dark-deeppurple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("md-dark-deeppurple") },
        { label: "md-dark-indigo", icon: 'pi pi-fw pi-sun', command: () => changeTheme("md-dark-indigo") },
        { label: "md-light-deeppurple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("md-light-deeppurple") },
        { label: "md-light-indigo", icon: 'pi pi-fw pi-sun', command: () => changeTheme("md-light-indigo") },
        { label: "mdc-dark-deeppurple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("mdc-dark-deeppurple") },
        { label: "mdc-dark-indigo", icon: 'pi pi-fw pi-sun', command: () => changeTheme("mdc-dark-indigo") },
        { label: "mdc-light-deeppurple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("mdc-light-deeppurple") },
        { label: "mdc-light-indigo", icon: 'pi pi-fw pi-sun', command: () => changeTheme("mdc-light-indigo") },
        { label: "nova", icon: 'pi pi-fw pi-sun', command: () => changeTheme("nova") },
        { label: "nova-accent", icon: 'pi pi-fw pi-sun', command: () => changeTheme("nova-accent") },
        { label: "nova-alt", icon: 'pi pi-fw pi-sun', command: () => changeTheme("nova-alt") },
        { label: "rhea", icon: 'pi pi-fw pi-sun', command: () => changeTheme("rhea") },
        { label: "saga-blue", icon: 'pi pi-fw pi-sun', command: () => changeTheme("saga-blue") },
        { label: "saga-green", icon: 'pi pi-fw pi-sun', command: () => changeTheme("saga-green") },
        { label: "saga-orange", icon: 'pi pi-fw pi-sun', command: () => changeTheme("saga-orange") },
        { label: "saga-purple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("saga-purple") },
        { label: "tailwind-light", icon: 'pi pi-fw pi-sun', command: () => changeTheme("tailwind-light") },
        { label: "vela-blue", icon: 'pi pi-fw pi-sun', command: () => changeTheme("vela-blue") },
        { label: "vela-green", icon: 'pi pi-fw pi-sun', command: () => changeTheme("vela-green") },
        { label: "vela-orange", icon: 'pi pi-fw pi-sun', command: () => changeTheme("vela-orange") },
        { label: "vela-purple", icon: 'pi pi-fw pi-sun', command: () => changeTheme("vela-purple") }
      ]
    },
    {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off',
      command: logout
    }
  ];

  const changeTheme = (theme) => {
    let themeLink = document.getElementById('app-theme');
    if (themeLink) {
      themeLink.href = `/public/themes/${theme}/theme.css`;
      setTheme(theme);
    }
  }

  const start = <img alt="logo" src="/public/images/logo/noirlab.svg" style={{ cursor: "pointer" }} onClick={() => navigate("/")} height="40" className="mr-2"></img>;
  const end = <div>
    <InputText placeholder="Search" type="text" className='mr-2' />
    <Chip label={theme} icon="pi pi-palette" />
  </div>

  return (
    <div className="card mb-2">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
