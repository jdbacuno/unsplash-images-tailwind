import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useGlobalContext } from './context';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useGlobalContext();

  return (
    <section className='align-element flex justify-end items-center py-4'>
      <button
        className='px-4 py-2 rounded-lg cursor-pointer '
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
