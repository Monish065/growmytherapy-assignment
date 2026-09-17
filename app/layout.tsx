import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'Dr. Maya Reynolds, PsyD | Santa Monica Therapist',description:'Warm, collaborative therapy for anxiety, trauma, burnout and perfectionism in Santa Monica and throughout California.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
