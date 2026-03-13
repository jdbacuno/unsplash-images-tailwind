import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section className='align-element mt-8'>
      <h1 className='title text-center'>unsplash images</h1>
      <form
        className='search-form flex justify-center items-center mt-10'
        onSubmit={handleSubmit}
      >
        <input
          type='search'
          name='search'
          placeholder='bird'
          className='form-input search-input '
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
