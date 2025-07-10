export function renderGroups() {
	const groups = JSON.parse(localStorage.getItem('groups') || '[]');
	const groupList = document.getElementById('groupList');
	const myGroupsList = document.getElementById('myGroupsList');
	const user = JSON.parse(localStorage.getItem('loggedInUser'));

	groupList.innerHTML = '';

	groups.forEach((group) => {
		const li = document.createElement('li');
		li.textContent = `${group.name} - ${group.description}`;

		const joinBtn = document.createElement('button');
		joinBtn.textContent = 'Join';

		joinBtn.addEventListener('click', () => joinGroup(group.id));

		li.appendChild(joinBtn);
		groupList.appendChild(li);
	});

	myGroupsList.innerHTML = '';

	if (user) {
		const joinedGroupIds = user.joinedGroups || [];
		const joinedGroups = groups.filter((group) =>
			joinedGroupIds.includes(group.id)
		);

		joinedGroups.forEach((group) => {
			const li = document.createElement('li');
			li.textContent = `${group.name} - ${group.description}`;
			myGroupsList.appendChild(li);
		});
	}
}

export function joinGroup(groupId) {
	const user = JSON.parse(localStorage.getItem('loggedInUser'));
	if (!user) {
		alert('You need to be logged in to join a group.');
		window.location.href = 'login.html';
		return;
	}
	let groups = JSON.parse(localStorage.getItem('groups') || '[]');

	if (!user.joinedGroups) {
		user.joinedGroups = [];
	}
	if (!user.joinedGroups.includes(groupId)) {
		user.joinedGroups.push(groupId);
		localStorage.setItem('loggedInUser', JSON.stringify(user));
		alert('You joined the group!');
		renderGroups(); // Re-render groups so UI updates
	} else {
		alert('You already joined this group before');
	}
}
