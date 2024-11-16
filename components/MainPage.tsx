import React from 'react'
import PopularBlogCard from './PopularBlogCard'
import PopularBlogCard2 from './PopularBlogCard2'
import PopularBlogCards from './PopularBlogCards'
import NewsBlogCards from './NewsBlogCards'
import NewsBlogCard from './NewsBlogCard'
import FeaturedBlogCard from './FeaturedBlogCard'
import FeaturedBlogList from './FeaturedBlogList'
import EditorsPick1 from './EditorsPick1'
import LatestArticles1 from './LatestArticles1'
import LatestArticles2 from './LatestArticles2'

type Props = {}

export default function MainPage({}: Props) {
  return (
    <div>
        <div>
            <div className='grid grid-cols-5'>
                <div className='col-span-3'>
                    <PopularBlogCard />
                </div>
                <div className='col-span-2'>
                    <PopularBlogCard2 />
                    <PopularBlogCards />
                </div>
            </div>
        </div>
        <div>
            <NewsBlogCards />
            <NewsBlogCard />
        </div>
        <div className=''>
            <div className='grid grid-cols-12'>
                <div className='col-span-7'>
                    <FeaturedBlogCard />
                </div>
                <div className='col-span-5'>
                    <FeaturedBlogList />
                </div>
            </div>
        </div>
        <div>
            <EditorsPick1 />
        </div>
        <div>
            <div>
                <LatestArticles1 />
            </div>
            <div>
                <LatestArticles2 />
            </div>
        </div>
    </div>
  )
}