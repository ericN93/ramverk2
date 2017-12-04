let editId = null;

function savePerson() {
	let inputFields = {
		name: document.getElementById('name').value,
		phone: document.getElementById('phone').value,
		city: document.getElementById('city').value,
        age: document.getElementById('age').value,
	};
	let path = "";
    let name = inputFields.name.length > 0 ? inputFields.name : 'None';
    let phone = inputFields.phone.length > 0 ? inputFields.phone : 'None';
    let city = inputFields.city.length > 0 ? inputFields.city : 'None';
    let age = inputFields.age.length > 0 ? inputFields.age : 'None';

    path = name  + '-' + phone + '-' + city + '-' + age + '-' + editId;

    window.location = window.location.href + '/save/' + path
    editId = null;
    document.getElementById('edit').addAttribute('disabled');
}

function removePerson(list) {
  window.location = window.location.href + '/delete/' + list['0'].classList[3];
}

function editPerson(event) {
	editId = event['0'].classList[3];
	document.getElementById('name').value = event['2']['children']['0']['children']['0'].innerText.substring(6);
	document.getElementById('phone').value = event['2']['children']['1']['children']['0'].innerText.substring(7);
	document.getElementById('city').value = event['2']['children']['2']['children']['0'].innerText.substring(6);
    document.getElementById('age').value = event['2']['children']['3']['children']['0'].innerText.substring(5);
}
