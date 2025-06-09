import Image from 'next/image';

export default function EuclidPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Euclid Mathematics Contest</h1>
        
        <div className="prose prose-lg mb-8">
          <p className="text-lg mb-4">
            The Euclid Mathematics Contest is one of the most prestigious mathematics competitions in Canada, 
            organized by the Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo. 
            This contest challenges students with complex mathematical problems that test their problem-solving skills, 
            mathematical reasoning, and creative thinking.
          </p>
          
          <p className="text-lg mb-4">
            In 2024, I participated in this challenging competition and received a Certificate of Participation, 
            demonstrating my commitment to mathematical excellence and problem-solving.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-[3/4] mb-8">
          <Image
            src="/certificates/euclid.jpg"
            alt="Euclid Mathematics Contest Certificate"
            fill
            className="object-contain rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
} 