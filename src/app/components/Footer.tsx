import Image from 'next/image'

export default function Footer() {
  return (
    <>
        <footer className="my-20">
            <p className="text-center text-sm text-slate-500">
                Copyright © {new Date().getFullYear()} TheNextWay. All rights reserved.
            </p>

            <p className="text-center text-xs text-slate-500 mt-1">
                Made by <a
                href="https://arsyadam.id"
                target="_blank"
                rel="noopener"
                className="hover:underline">
                arsyadam.id
                </a>
            </p>
        </footer>
    </>
  )
}