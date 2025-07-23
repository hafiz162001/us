function saveMemory() {
  const input = document.getElementById('memoryInput');
  const memory = input.value.trim();
  if (memory !== "") {
    let memories = JSON.parse(localStorage.getItem('memories')) || [];
    memories.push(memory);
    localStorage.setItem('memories', JSON.stringify(memories));
    input.value = "";
    displayMemories();
  }
}

function displayMemories() {
  const memoryList = document.getElementById('memoryList');
  memoryList.innerHTML = "";
  let memories = JSON.parse(localStorage.getItem('memories')) || [];
  memories.forEach((mem, index) => {
    const li = document.createElement('li');
    li.textContent = mem;
    memoryList.appendChild(li);
  });
}

// Tampilkan saat halaman dibuka
window.onload = displayMemories;
