import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div>
        <footer className="bg-gray-300 text-gray-800 p-4 mt-8">
          <div className=" text-center">
            <p>© 2024 My Blog. All rights reserved.</p>
          </div>
        </footer>
    </div>
  )
}