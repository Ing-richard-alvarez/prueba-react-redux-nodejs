export async function getAllMessage() {

    const response = await fetch('/api/message');
    return await response.json();

}

export async function createMessage(data) {
    const response = await fetch(`/api/message/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: data})
      })
    return await response.json();
}