import React from 'react'
import NotesPage from 'components/NotesPage'
import { NextSeo } from 'next-seo';
import { siteMetadata } from 'site/siteMatedata';

type Props = {}

const Notes = (props: Props) => {
    return (
        <>
            <NextSeo
                title={`Notes | ${siteMetadata.title}`}
                description={`ALl my notes are here ✌️`}
                canonical={siteMetadata.siteAddess}
                openGraph={{
                    url: `${siteMetadata.siteAddess}/notes`,
                    title: `Notes | ${siteMetadata.title}`,
                    description: `ALl my notes are here ✌️`,
                    images: [
                        {
                            url: '/assets/site/notes-light.svg',
                            width: 800,
                            height: 600,
                            alt: 'notes page',
                            type: 'image/svg',
                        },
                        // { url: '/assets/site/notes-light.svg' },
                    ],
                    site_name: `${siteMetadata.title}`,
                }}
                twitter={{
                    handle: `${siteMetadata.twitter}`,
                    site: `${siteMetadata.twitter}`,
                    cardType: 'summary_large_image',
                }}
            />
            <NotesPage />
        </>
    )
}

export default Notes