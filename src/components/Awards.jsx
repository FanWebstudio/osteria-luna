import { FaStar, FaAward, FaTrophy } from 'react-icons/fa';

function Awards() {
  return (
    <div className="flex justify-center items-center space-x-12">
      <div className="flex flex-col items-center space-y-2 opacity-80 hover:opacity-100 transition-opacity">
        <FaStar className="w-12 h-12 text-gold" />
        <p className="text-sm font-accent text-gold">Michelin Star</p>
      </div>
      <div className="flex flex-col items-center space-y-2 opacity-80 hover:opacity-100 transition-opacity">
        <FaAward className="w-12 h-12 text-gold" />
        <p className="text-sm font-accent text-gold">Zagat Rated</p>
      </div>
      <div className="flex flex-col items-center space-y-2 opacity-80 hover:opacity-100 transition-opacity">
        <FaTrophy className="w-12 h-12 text-gold" />
        <p className="text-sm font-accent text-gold">James Beard</p>
      </div>
    </div>
  );
}

export default Awards;
