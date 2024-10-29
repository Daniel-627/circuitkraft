import Carousel from '@/components/Carousel';

export default function Home() {
  const cards = [
    'Card 1', 'Card 2', 'Card 3', 'Card 4',
    'Card 5', 'Card 6', 'Card 7', 'Card 8',
    'Card 9', 'Card 10'
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Carousel items={cards} />
    </div>
  );
}
