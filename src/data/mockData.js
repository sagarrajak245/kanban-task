/* eslint-disable no-unused-vars */
import { faker } from '@faker-js/faker';

// Generate 20 random users
const generateUsers = () => {
    return Array.from({ length: 20 }, (_, i) => ({
        id: `user-${i + 1}`,
        name: faker.person.fullName(),
        avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
        available: faker.datatype.boolean()
    }));
};

// Generate realistic tasks
const generateTasks = (users) => {
    const statuses = ['To Do', 'In Progress', 'Pending', 'Completed'];
    const priorities = [0, 1, 2, 3, 4]; // 0=No priority, 1=Low, 2=Medium, 3=High, 4=Urgent
    const categories = ['Documentation', 'Litigation Support', 'Document Review', 'Evidence Mgmt', 'Trial Preparation', 'Depo Summaries'];

    const taskTemplates = [
        'Draft cover letter',
        'Review merge compliance',
        'Schedule deposition',
        'Draft Subpoena medical',
        'File appeal motion',
        'Translate Contract',
        'Evidence Mgmt',
        'Prepare trial documents',
        'Client consultation',
        'Legal research',
        'Court filing',
        'Document review',
        'Contract negotiation',
        'Case analysis',
        'Witness preparation',
        'Discovery response',
        'Motion to dismiss',
        'Settlement discussion',
        'Compliance audit',
        'Risk assessment'
    ];

    return Array.from({ length: 60 }, (_, i) => {
        const assignedUsers = faker.helpers.arrayElements(users, { min: 1, max: 3 });
        const taskTitle = faker.helpers.arrayElement(taskTemplates);
        const category = faker.helpers.arrayElement(categories);

        return {
            id: `CAM-${faker.number.int({ min: 1000, max: 9999 })}`,
            title: taskTitle,
            description: faker.lorem.sentence(),
            status: faker.helpers.arrayElement(statuses),
            priority: faker.helpers.arrayElement(priorities),
            tag: [category],
            userId: assignedUsers[0].id,
            assignedUsers: assignedUsers,
            dueDate: faker.date.future().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }),
            hasTime: faker.datatype.boolean()
        };
    });
};

export const users = generateUsers();
export const tickets = generateTasks(users);

export const mockData = {
    tickets,
    users
};