import { DataStore } from '@aws-amplify/datastore';
import { Person } from './models';

await DataStore.save(
    new Person({
		"firstName": "Lorem ipsum dolor sit amet",
		"lastName": "Lorem ipsum dolor sit amet",
		"password": "Lorem ipsum dolor sit amet",
		"email": "test12346789@testemailtestemail.com"
	})
);