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
    <div className='space-y-4'>
        <div className="pb-4 border-b-2 border-gray-200">
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
        <div className="pb-4 border-b-2 border-gray-200">
            <p className='py-2 font-semibold'>Tech News</p>
                <NewsBlogCards />
                <NewsBlogCard  />
        </div>
        <div className="pb-4 border-b-2 border-gray-200">
            <p className='py-2 font-semibold'>Featured </p>
            <div className='grid grid-cols-12'>
                <div className='col-span-7'>
                    <FeaturedBlogCard />
                </div>
                <div className='col-span-5'>
                    <FeaturedBlogList />
                </div>
            </div>
        </div>
        <div className="pb-4 border-b-2 border-gray-200">
            <p className='py-2 font-semibold'>Editor's Pick</p>
            <EditorsPick1 />
        </div>
        <div>
            <p className='py-2 font-semibold'>Latest </p>
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