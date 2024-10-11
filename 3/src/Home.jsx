import React, {useContext} from 'react';

import ThemeContext from './contexts';

const Home = () => {
    // BEGIN (write your solution here)
    const {theme} = React.useContext(ThemeContext);
    // END

    return (
        <article className={theme.className}>
            Текст для вкладки Home
        </article>
    );
};

export default Home;
