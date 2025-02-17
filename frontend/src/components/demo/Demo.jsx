const Demo = () => {
  return (
    <video
      autoPlay
      loop
      className='bg-cover w-full h-auto'
      muted
      alt='indian-chicken'
    >
      <source src='/videos/indian-food-chicken-video.mp4' type='video/mp4' />
      <source src='/videos/indian-food-chicken-video.webm' type='video/webm' />
    </video>
  );
};
export default Demo;
