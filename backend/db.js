const faker = require('faker/locale/pt_BR');

module.exports = () => {
  const data = {
    rooms: [],
    users: [],
    room_history: [],
  };

  data.rooms.push({ id: 1, name: 'Sala Front-end' });

  for (let i = 0; i < 5; i++) {
    data.users.push({
      id: i + 1,
      name: faker.name.findName(),
    });
  }

  for (let i = 0; i < 1000; i++) {
    data.room_history.push({
      id: i + 1,
      roomId: 1,
      userId: faker.datatype.number({ min: 1, max: 5 }),
      timestamp: faker.date.recent(1),
      message: faker.lorem.sentence(),
    })
  }

  return data;
};