import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

import StyledLanguageSwitcher from "./style"
import {LanguageContext} from "../../contexts/language-context"

const LanguageSwitcher = ({ children, ...props }) => {
    const [lang, setLang] = useContext(LanguageContext)
    const { translations, banners } = lang || {}

    const languages = [
        {
            name: 'English',
            short: 'en'
        },
        {
            name: 'Deutsch',
            short: 'de'
        }
    ]

    const fetchTranslations = async short => {
        setLang({ ...lang, translations: { fetching: true } })

        return await axios.get(`https://cms.spela.com/${short}/arest/locale/translations`)
            .then(({ data }) => data)
    }

    const fetchBanners = async short => {
        setLang({ ...lang, banners: { fetching: true } })

        return await axios.get(`https://cms.casinogods.com/${short}/arest/blocks/region/Header`)
            .then(({ data }) => data)
    }

    const setResponse = (target = 'translations', func) => {
        if (!lang[target][lang.current])
            func([lang.current]).then(res => setLang({
                ...lang,
                [target]: {...lang[target], [lang.current]: res, fetching: false}
            }))
    }

    // Fetch translations and set the context when the language changes
    useEffect(() => setResponse('translations', () => fetchTranslations(lang.current)), [, lang.current])

    // Fetch banners (and/or anything else) and set the context once translations are set
    useEffect(() => !translations.fetching && setResponse('banners', () => fetchBanners(lang.current)), [lang.translations])
    // useEffect(() => !articles.fetching && setResponse('articles', () => fetchArticles(lang.current)), [lang.articles])

    return (
        <>
            <StyledLanguageSwitcher {...props}>
                {languages.map(({name, short}, index) =>
                    <li
                        className={`${short === lang.current ? 'active' : ''} ${lang.banners.fetching ? 'disabled' : ''}`}
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
                {(translations.fetching || banners.fetching) && 'Loading...'}
            </StyledLanguageSwitcher>
            {
                !translations.fetching &&
                translations &&
                translations[lang.current] &&
                <p>{translations[lang.current].myaccount_home['account-summary']}</p>
            }
            {
                !banners.fetching &&
                banners &&
                banners[lang.current] &&
                banners[lang.current].map((banner, index) => {
                    return (
                            <div key={banner + index}>
                                <div dangerouslySetInnerHTML={{__html: banner.fields.body.value[0]}}/>
                                {/*// TODO: Should be using next/image <Image> instead*/}
                                {/*{https://community.netlify.com/t/nextjs-external-images-not-loading-works-on-vercel/27030}*/}
                                <img
                                    width={100}
                                    height={100}
                                    src={'https:' + banner.fields.field_decoupled_block_bg_small.value[0].url}/>
                                <Image
                                    width={100}
                                    height={100}
                                    src={'https:' + banner.fields.field_decoupled_block_bg_small.value[0].url}/>
                            </div>
                        )
                }
            )}
        </>
    )
};

export default LanguageSwitcher;