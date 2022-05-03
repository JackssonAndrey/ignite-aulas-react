// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Factory, Model } from 'miragejs';

import faker from '@faker-js/faker';

type User = {
  email: string;
  name: string;
  // eslint-disable-next-line camelcase
  created_at: string;
};

export function makeServer() {
  return createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 15);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });
}
