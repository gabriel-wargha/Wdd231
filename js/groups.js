import { renderGroups, joinGroup } from './groupUtils.js';

window.addEventListener('DOMContentLoaded', () => {
  const groupForm = document.getElementById('groupForm');
  const groupNameInput = document.getElementById('groupName');
  const groupDescInput = document.getElementById('groupDesc');

  renderGroups();

  groupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = groupNameInput.value.trim();
    const description = groupDescInput.value.trim();

    if (name === '' || description === '') {
      alert('Please fill in all fields.');
      return;
    }

    const groups = JSON.parse(localStorage.getItem('groups') || '[]');

    const newGroup = {
      id: Date.now(),
      name,
      description,
    };

    groups.push(newGroup);
    localStorage.setItem('groups', JSON.stringify(groups));

    renderGroups();

    groupNameInput.value = '';
    groupDescInput.value = '';
  });
});
