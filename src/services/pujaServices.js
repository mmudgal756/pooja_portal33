// This is a mock service file. In a real application, this would be
// replaced with actual API calls to a backend.

let services = [
  {
    id: 1,
    title: 'Satyanarayan Katha',
    description: 'A sacred ritual to honor Lord Vishnu, bringing peace and prosperity to your home.',
    price: 5100,
  },
  {
    id: 2,
    title: 'Mundan Sanskar',
    description: 'The traditional head-shaving ceremony for your child, performed by our experienced pandits.',
    price: 3100,
  },
  {
    id: 3,
    title: 'Janeu Sanskar',
    description: 'The sacred thread ceremony (Upanayana) marking the journey into spiritual studies.',
    price: 4100,
  },
   {
    id: 4,
    title: 'Grah Pravesh Pooja',
    description: 'A housewarming ceremony to purify your new home and invite blessings for happiness and prosperity.',
    price: 7100,
  },
  {
    id: 5,
    title: 'Vivah Sanskar',
    description: 'A beautiful wedding ceremony conducted by our expert pandits, following all the sacred traditions.',
    price: 15100,
  },
];

let nextId = 6;

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, 500));

export async function getServices() {
  await delay(500);
  return [...services];
}

export async function getService(id) {
  await delay(500);
  return services.find(s => s.id === id);
}

export async function addService(service) {
  await delay(500);
  const newService = { id: nextId++, ...service };
  services.push(newService);
  return newService;
}

export async function updateService(id, updatedService) {
  await delay(500);
  services = services.map(s => (s.id === id ? { ...s, ...updatedService, id } : s));
  return getService(id);
}

export async function deleteService(id) {
  await delay(500);
  services = services.filter(s => s.id !== id);
  return { success: true };
}
