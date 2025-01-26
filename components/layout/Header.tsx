type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <div className="text-xs sm:text-3xl text-white bg-orange-400 py-1 px-2 rounded-sm dark:bg-amber-900 dark:text-orange-200 ">
      {title}
    </div>
  );
};

export default Header;
