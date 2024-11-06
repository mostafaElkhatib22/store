import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { VscCode } from 'react-icons/vsc';

function Logo() {
  return (
    <Button size='icon' asChild className='bg-red-500 w-12 dark:bg-slate-300 dark:text-black'>
      <Link href='/'>
        K.M.C
      </Link>
    </Button>
  );
}
export default Logo;
