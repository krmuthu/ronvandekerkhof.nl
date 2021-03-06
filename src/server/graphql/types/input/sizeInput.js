import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLInt as Int,
} from 'graphql';

export default new InputObjectType({
    name: 'sizeInput',
    fields: {
        width: {
            type: Int,
        },
        height: {
            type: Int,
        },
    },
});
