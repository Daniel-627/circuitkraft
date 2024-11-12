import React from 'react'
import PopularBlogCard from "@/components/PopularBlogCard";
import PopularBlogCards from "@/components/PopularBlogCards";

type Props = {}

export default function page({}: Props) {
  return (
    <div>
      <PopularBlogCard/>
      
      <PopularBlogCards/>
    </div>
  )
}