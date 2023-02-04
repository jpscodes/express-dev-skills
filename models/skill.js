const skills = [
    {id: 123456, skill: 'html' },
    {id: 234567, skill: 'javascript'},
    {id: 345678, skill: 'css'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
};