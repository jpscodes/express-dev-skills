const skills = [
    {id: 123456, skill: 'html' },
    {id: 234567, skill: 'javascript'},
    {id: 345678, skill: 'css'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};