import { Engineer, Teacher } from './abstract';

const engineer = new Engineer('Mario', 'test@email.com', 'IT');
const teacher = new Teacher('Mario', 'test@email.com', 'Node');

engineer.responseObject(engineer.field);
