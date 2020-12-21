import React, { useContext, useEffect } from 'react'
import axios from 'axios'

import Image from 'next/image'

import StyledLanguageSwitcher from "./style"
import {LanguageContext} from "../../contexts/language-context"



const LanguageSwitcher = ({ children, ...props }) => {
    const fetchData = async short => {
        setLang({...lang, fetching: true});

        return await axios.get(`https://cms.spela.com/${short}/arest/locale/translations`)
            .then(({ data }) => data)
    }

    const [lang, setLang] = useContext(LanguageContext)
    const languages = [
        {
            name: 'English',
            short: 'en'
        },
        {
            name: 'Deutsch',
            short: 'de'
        }
    ];

    useEffect(() => {
        fetchData(lang.current).then(res => setLang({...lang, translations: res, fetching: false}))
    }, [, lang.current]);

    return (
        <>
            <StyledLanguageSwitcher {...props}>
                {languages.map(({name, short}, index) =>
                    <li
                        className={short === lang.current ? 'active' : ''}
                        key={short+index}
                        onClick={() => lang.current !== short && setLang({...lang, current: short})}
                    >
                        <Image
                            src={`/flags/${short}.svg`}
                            layout='fill'
                            objectPosition='left 50%'
                            objectFit='contain'
                        />
                        {name}
                    </li>
                )}
                {lang.fetching && 'Loading...'}
            </StyledLanguageSwitcher>
            {!lang.fetching && lang.translations && <p>{lang.translations.myaccount_home['account-summary']}</p>}
        </>
    )
};

export default LanguageSwitcher;