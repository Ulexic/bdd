import { faker } from '@faker-js/faker';
import { PostDTO } from 'src/post/post.entity';
import { ReactionDTO, ReactionType } from 'src/reaction/reaction.entity';
import { UserDTO } from 'src/user/user.entity';
import { ReportDTO } from './report/report.entity';

export const USERS: UserDTO[] = [];
export const POSTS: PostDTO[] = [];
export const REACTIONS: ReactionDTO[] = [];
export const REPORTS: ReportDTO[] = [];

export function createRandomUser(): UserDTO {
    return {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
    };
}

Array.from({ length: 1500 }).forEach(() => {
    USERS.push(createRandomUser());
});

Array.from({ length: 150000 }).forEach(() => {
    REACTIONS.push({
        userId: faker.datatype.number({ min: 1, max: 1500 }),
        postId: faker.datatype.number({ min: 1, max: 15000 }),
        type: faker.datatype.boolean() ? ReactionType.LIKE : ReactionType.DISLIKE,
    });
});

Array.from({ length: 1000 }).forEach(() => {
    REPORTS.push({
        userId: faker.datatype.number({ min: 1, max: 1500 }),
        postId: faker.datatype.number({ min: 1, max: 15000 }),
        reason: faker.lorem.words(3),
    });
});

Array.from({ length: 15000 }).forEach(() => {
    POSTS.push({
        content: faker.lorem.sentence(4),
        userId: faker.datatype.number(({ min: 1, max: 1500 })),
    });
});
