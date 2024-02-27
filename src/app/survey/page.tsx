import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Survey Fashion by TheNextWay',
  description: 'Haloo✨Terimakasih sudah menyempatkan waktu kalian untuk mengisi survey kami!',
}

export default function Survey() {
    return (
      <>
      <div className="mx-auto max-w-screen-xl p-5 text-center" >

            <h1 className="font-bold text-[50px]">Survey Fashion</h1>
      </div>
        <div className='flex justify-center'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeY5GDX-wogMcMrvW9kpqID5i6319aFzbn3uh38sP_QFCSKSg/viewform?embedded=true" width="640" height="7800" >Loading…</iframe>
        </div>
      </>
    )
  }