import React from 'react';
import { useDispatch } from 'react-redux';
import { loadNewPhotos } from '../store/photos';
import PhotoLoadMore from './PhotoLoadMore';
import PhotosContent from './PhotosContent';

const Photos = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);

  return (
    <section>
      <PhotosContent />
      <PhotoLoadMore />
    </section>
  );
};

export default Photos;
