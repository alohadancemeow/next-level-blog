import type { NextPage } from 'next'
import HomePage from 'components/HomePage';
import { NextSeo } from 'next-seo';
import { siteMetadata } from 'site/siteMatedata';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${siteMetadata.homeTitle} | ${siteMetadata.title}`}
        description={siteMetadata.description}
        canonical={siteMetadata.siteAddess}
        openGraph={{
          url: `${siteMetadata.siteAddess}`,
          title: `${siteMetadata.title}`,
          description: `${siteMetadata.description}`,
          images: [
            {
              url: '/assets/site/home-light.png',
              width: 800,
              height: 600,
              alt: 'personal home',
              type: 'image/png',
            },
            // {
            //   url: 'https://www.example.ie/og-image-02.jpg',
            //   width: 900,
            //   height: 800,
            //   alt: 'Og Image Alt Second',
            //   type: 'image/jpeg',
            // },
            // { url: 'https://www.example.ie/og-image-03.jpg' },
            // { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: `${siteMetadata.title}`,
        }}
        twitter={{
          handle: `${siteMetadata.twitter}`,
          site: `${siteMetadata.twitter}`,
          cardType: 'summary_large_image',
        }}
      />
      <HomePage />
    </>
  )
}

export default Home
