import React from 'react';
import './styles.scss';

// Material UI
import Link from '@material-ui/core/Link';

const SocialNetworks = (props) => {
    const { data, className } = props;
    return (
        <div className={className}>
            {data &&
                data.map((item) => (
                    <Link
                        href={item.route}
                        target="_blank"
                        rel="noreferrer"
                        key={item.id}
                    >
                        {item.icon}
                    </Link>
                ))}
        </div>
    );
};

export default SocialNetworks;
