import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { getLanguageName } from "../../utils/lang";

import StyledLanguageSwitcher from "./style"

const LanguageSwitcher = ({ children, ...props }) => {
    const [ banners, setBanners ] = useState({ fetching: true, 'en-EU': [] })
    const [ translations, setTranslations ] = useState({ fetching: true, 'en-EU': [] })

    const { locales, locale } = useRouter();

    const fetchTranslations = async () => {
        setTranslations({ ...translations, fetching: true })

        return await axios.get(`https://cms.spela.com/${locale}/arest/locale/translations`)
            .then(({ data }) => data)
    }

    const fetchBanners = async () => {
        setBanners({ ...banners, fetching: true });

        return await axios.get(`https://cms.casinogods.com/${locale}/arest/blocks/region/Header`)
            .then(({ data }) => data)
    }

    const setResponse = (target = 'translations', func, set) => {
        if (![target])
            func().then(res => set({
                ...[target],
                fetching: false,
                [locale]: res
            }))
    }

    // Fetch translations and set when the language changes
    useEffect(() => setResponse('translations', () => fetchTranslations(), setTranslations()), [, locale])

    // Fetch banners (and/or anything else) and set once translations are set
    useEffect(() => {
        translations[locale] && !translations.fetching && setResponse('banners', () => fetchBanners(), setBanners())
    }, [translations])
    // useEffect(() => !articles.fetching && setResponse('articles', () => fetchArticles(lang.current)), [lang.articles])

    useEffect(() => {
    }, [])

    return (
        <>
            <StyledLanguageSwitcher {...props}>
                {locales.map((short, index) =>
                    <li
                        className={`${short === locale ? 'active' : ''} ${banners.fetching ? 'disabled' : ''}`}
                        key={short+index}
                        onClick={() => locale !== short ? document.cookie = '' : ''}
                    >
                        <Image
                            src={`/flags/${short}.svg`}
                            layout='fill'
                            objectPosition='left 50%'
                            objectFit='contain'
                        />
                        {getLanguageName(short)}
                    </li>
                )}
                {(translations.fetching || banners.fetching) && 'Loading...'}
            </StyledLanguageSwitcher>
            {
                !translations.fetching &&
                translations &&
                translations[locale] &&
                <p>{translations[locale].myaccount_home['account-summary']}</p>
            }
            {
                !banners.fetching &&
                banners &&
                banners[locale] &&
                banners[locale].map((banner, index) => {
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