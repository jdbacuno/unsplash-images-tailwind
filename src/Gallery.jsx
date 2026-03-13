import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = `https:///api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const { isLoading, data, isError } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(`${url}&query=${searchTerm}`);
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className='align-element flex justify-center items-center py-8'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className='align-element flex justify-center items-center py-8 text-red-500'>
        <h4>An Error Occurred </h4>
      </section>
    );
  }

  const { results } = data;

  if (results.length < 1) {
    return (
      <section className='align-element flex justify-center items-center py-8'>
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className='align-element grid grid-cols-1 sm:grid-cols-3 gap-2 py-8'>
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className='img w-full h-100 object-cover'
          />
        );
      })}
    </section>
  );
};

export default Gallery;
