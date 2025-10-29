import Link from 'next/link'; 

const ExampleComponent = () => {
  return (
    <>
      <h1>Привіт!</h1>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
  
        <Link
          href="/about"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Про нас
        </Link>

        <Link
          href="/contact"
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
        >
          Контакти
        </Link>

       
        <Link
          href="/dialog" 
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#ff6347] text-white gap-2 hover:bg-[#e55342] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Діалог
        </Link>
      </div>
    </>
  );
};

export default ExampleComponent;
