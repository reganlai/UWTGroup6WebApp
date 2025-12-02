// third-party
import { FormattedMessage } from 'react-intl';

// assets
import MovieOutlined from '@ant-design/icons/VideoCameraOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import BookOutlined from '@ant-design/icons/BookOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { MovieOutlined, PlusOutlined, BookOutlined, LockOutlined };

// ==============================|| MENU ITEMS - MEDIA & ACCOUNT ||============================== //

const media: NavItemType = {
    id: 'media',
    title: <FormattedMessage id="media" />,
    type: 'group',
    children: [
        {
            id: 'movies',
            title: <FormattedMessage id="movies" />,
            type: 'item',
            url: '/movies',
            icon: icons.MovieOutlined
        },
        {
            id: 'tv-shows',
            title: <FormattedMessage id="tv-shows" />,
            type: 'item',
            url: '/tv-shows',
            icon: icons.PlusOutlined
        },
        {
            id: 'create-media',
            title: <FormattedMessage id="create-media" />,
            type: 'item',
            url: '/create-media',
            icon: icons.PlusOutlined
        },
        {
            id: 'watchlist',
            title: <FormattedMessage id="watchlist" />,
            type: 'item',
            url: '/watchlist',
            icon: icons.BookOutlined
        },
        {
            id: 'change-password',
            title: <FormattedMessage id="change-password" />,
            type: 'item',
            url: '/change-password',
            icon: icons.LockOutlined
        }
    ]
};

export default media;
