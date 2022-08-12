export default class Theme {
  constructor(body, inputs) {
    this.body = body;
    this.inputs = inputs;
  }

  changeTheme() {
    this.inputs.forEach((item) => {
      if (item.checked) {
        if (item.id === 'dark') {
          this.body.classList.remove('light');
          this.body.classList.add(item.id);
          this.saveLS(item.id);
        } else if (item.id === 'light') {
          this.body.classList.remove('dark');
          this.body.classList.add(item.id);
          this.saveLS(item.id);
        }
      }
    });
  }

  saveLS(color) {
    localStorage.setItem('theme', color);
  }

  loadLS() {
    this.body.className = '';
    this.body.classList.add(localStorage.getItem('theme'));
  }

  createItem() {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'dark');
    }
  }
}
