import axios from ".";

export async function postCodepen(data) {
	return axios.post("/code", data);
}

export async function getCodepenByTitleApi(title) {
	return axios.get(`/code/${title}`);
}

export async function getLoggedInUser() {
	return axios.get(`/auth/loggedInUser`);
}

export async function getUser(userId) {
	return axios.get(`/user/${userId}`);
}
