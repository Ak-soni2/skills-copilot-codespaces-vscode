function skillsMember() {
  return {
    name: 'skillsMember',
    description: 'A member of the skills team',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the member'
      },
      role: {
        type: 'string',
        description: 'The role of the member'
      },
      skills: {
        type: 'array',
        items: {
          type: 'string'
        },
        description: 'The skills of the member'
      }
    },
    required: ['name', 'role', 'skills']
  };
}
function skillsMemberList() {
  return {
    name: 'skillsMemberList',
    description: 'A list of members of the skills team',
    type: 'array',
    items: skillsMember()
  };
}
function skillsMemberListResponse() {
  return {
    name: 'skillsMemberListResponse',
    description: 'A response containing a list of members of the skills team',
    type: 'object',
    properties: {
      members: skillsMemberList()
    },
    required: ['members']
  };
}