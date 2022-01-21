import Hero from '../components/Hero';
import ItemCard from '../components/ItemCard';

function Home() {
  return [
    <Hero />,
    <div class="min-h-screen bg-gray-100 flex justify-center py-50">
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  ];
}

export default Home;
