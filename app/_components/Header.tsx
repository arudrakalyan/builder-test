
import { builder } from '@builder.io/sdk'
import Link from 'next/link'

builder.init('82612284188542ac97b95d953588143e')

export default async function Header() {
const links = await builder.getAll("navlinks", { prerender: true });
const data = links[0].data.links;
console.log(data);
  return (
    <>
      <header className='bg-white py-5' >
        <nav>
            <ul className='flex justify-center'>
                {data.map((link: any, index: any) => (
                <li key={index} className='mx-5'>
                    <Link href={link.url} className="text-emerald-900">{link.label}</Link>
                </li>
                ))}
            </ul>
        </nav>
        <h1 className='text-center text-4xl font-bold'>Header</h1>
      </header>
    </>
  );
}

