import React from 'react';
import Icon from '@material-ui/core/Icon';

const MenuData = [
    {
        id: 'menu_0',
        route: 'home',
        icon: '',
        name: 'Inicio',
    },
    {
        id: 'menu_1',
        route: 'about',
        icon: '',
        name: 'Acerca de mi',
    },
    {
        id: 'menu_2',
        route: 'projects',
        icon: '',
        name: 'Proyectos',
    },
    {
        id: 'menu_3',
        route: 'contact',
        icon: '',
        name: 'Contacto',
    },
];

const parallaxData = {
    titles: [
        { prefix: 'Yo soy ', word: 'Edwin Obando' },
        { prefix: 'Yo soy ', word: 'Full stack' },
        { prefix: 'Yo soy ', word: 'VTEX Developer' },
        { prefix: 'Yo ❤️ ', word: 'Programar' },
    ],
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur ex elementum lectus vehicula vestibulum. Donec commodo aliquet justo venenatis fermentum. In hac habitasse platea dictumst. Nulla non urna ut arcu auctor ultricies. Pellentesque finibus efficitur egestas. Donec tincidunt mi lorem, vitae placerat erat sagittis sit amet. Nunc leo lectus, fringilla non ipsum commodo, fringilla aliquam ipsum',
    socialNetworks: [
        {
            id: 'socialNetwork_1',
            route: 'https://github.com/Mecrano',
            name: 'Github',
            icon: <Icon className="fa fa-github" fontSize="large" />,
        },
        {
            id: 'socialNetwork_2',
            route: 'https://gitlab.com/eobando',
            name: 'Gitlab',
            icon: <Icon className="fa fa-gitlab" fontSize="large" />,
        },
        {
            id: 'socialNetwork_3',
            route: 'https://www.linkedin.com/in/eobando/',
            name: 'LinkedIn',
            icon: <Icon className="fa fa-linkedin" fontSize="large" />,
        },
    ],
};
export { MenuData, parallaxData };
