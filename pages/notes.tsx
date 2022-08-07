import React from 'react'
import NotesPage from 'components/NotesPage'
import { NextSeo } from 'next-seo';
import { siteMetadata } from 'site/siteMatedata';

type Props = {}

const MemoizedNotes = React.memo(NotesPage)

const Notes = (props: Props) => {
    return (
        <>
            <NextSeo
                title={`Notes | ${siteMetadata.title}`}
                description={`ALl my notes are here ✌️`}
                canonical={siteMetadata.siteAddress}
                openGraph={{
                    url: `${siteMetadata.siteAddress}/notes`,
                    title: `Notes | ${siteMetadata.title}`,
                    description: `I put all my notes, shortcuts, and quotes in here. ✌️`,
                    images: [
                        {
                            url: '/assets/site/og-notes.png',
                            alt: 'notes page',
                            type: 'image/png',
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
            <MemoizedNotes />
        </>
    )
}

export default Notes