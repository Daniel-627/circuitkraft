import React from 'react'
import NewsWidget from './NewsWidget'
import SocialWidget from './SocialWidget'
import RandomCategory1 from './RandomCategory1'
import RandomCategory2 from './RandomCategory2'
import CategoriesWidget from './CategoriesWidget'

type Props = {}

export default function AllWidgets({}: Props) {
  return (
    <div>
      <div>
        <NewsWidget />
      </div>
      <div>
        <SocialWidget />
      </div>
      <div>
        <RandomCategory1 />
      </div>
      <div>
        <RandomCategory2 />
      </div>
      <div>
        <CategoriesWidget />
      </div>
    </div>

  )
}