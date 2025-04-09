
import Carousel from './Carousel';

export default function Test() {

  const carouselImages = [
    {
      src: '/assets/img/a.jpg',
      alt: 'Beautiful mountain landscape',
      caption: 'Mountain vista with snow-capped peaks'
    },
    {
      src: '/assets/img/b.jpg',
      alt: 'Serene beach at sunset',
      caption: 'Golden sunset over calm ocean waters'
    },
    {
      src: '/assets/img/c.jpg',
      alt: 'Urban cityscape',
      caption: 'Downtown skyline with modern architecture'
    },
    {
      src: '/assets/img/a.jpg',
      alt: 'Forest trail',
      caption: 'Hiking path through ancient redwoods'
    }
  ];

  return (
    <div>

      <main className="min-h-screen py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">Image Carousel</h1>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Default Carousel</h2>
            <Carousel images={carouselImages} height={500} />
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Faster Auto-Play (2 seconds)</h2>
            <Carousel images={carouselImages} autoPlayInterval={2000} height={400} />
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">No Auto-Play, Navigation Only</h2>
            <Carousel images={carouselImages} autoPlayInterval={0} height={400} />
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">No Navigation Dots</h2>
            <Carousel images={carouselImages} showDots={false} height={400} />
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">No Navigation Arrows</h2>
            <Carousel images={carouselImages} showArrows={false} height={400} />
          </div>
        </div>
      </main>
    </div>
  );
}