// components/HydrationShowcase.js
const products = [
  {
    id: 1,
    name: 'Rainbow 600',
    image: '/1.png',
    color: 'Turquoise',
  },
  {
    id: 2,
    name: 'Rio 650',
    image: '/4.png',
    color: 'Gray',
  },
  {
    id: 3,
    name: 'Big Bull 1300',
    image: '/5.png',
    color: 'Silver',
  },
  {
    id: 4,
    name: 'Rome 600',
    image: '/6.png',
    color: 'Sky Blue',
  },
  {
    id: 5,
    name: 'Rainbow 600',
    image: '/1.png',
    color: 'Turquoise',
  },
  {
    id: 6,
    name: 'Rio 650',
    image: '4.png',
    color: 'Gray',
  },
]

export default function HydrationShowcase() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold text-white-900 mb-4">
            Hydration Essentials
            </h1>
            <h3 className="text-lg text-black-700">
            Discover Our Range of Premium Water Bottles
            </h3>
          </div>
          <button className="mt-4 inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400 hover:bg-blue-500">
            VIEW MORE
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-80 bg-gray-200 aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                {product.id % 2 === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-2 border-yellow-400 rounded-full opacity-50" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
