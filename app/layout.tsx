import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MotionRoller } from "@/components/motion-roller";
export const metadata: Metadata = { title:{default:"United Business Alliance | A National Business Platform",template:"%s | United Business Alliance"},description:"United Business Alliance — a national platform for business dialogue, trade development and economic policy engagement in Pakistan." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/><MotionRoller/><main>{children}</main><SiteFooter/></body></html>}
