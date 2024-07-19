import Image from 'next/image';

const Connect = () => {

  return (
    <div className="bg-gray-700 w-full flex flex-col items-center py-[40px] text-[30px]">
      <div>
        Connect w/ Me:
      </div>
      <div className="flex">
        <a href="https://www.linkedin.com/in/styles-kim/">
          <Image width={200} height={200} src='https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg' alt='LinkedIn logo' />
        </a>
        <a href="https://github.com/stylescode">
          <Image width={200} height={200} src='https://pngimg.com/uploads/github/github_PNG23.png' alt='GitHub logo'/>
        </a>
      </div>
    </div>
  );
}

export default Connect;