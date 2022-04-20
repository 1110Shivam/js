function clickon() {
    const charset = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);
    const passwordLength = 15;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomnum = Math.floor(Math.random() * charset.length);
        password += charset.substring(randomnum, randomnum + 1);
    }
    document.getElementById("input").value = password;
  }