class LocalStorage {
  
  get length() {
    return Object.keys(this).length
  }
  
  clear() {
    Object.keys(this).forEach((key) => {
      delete this[key];
    });
  }
  setItem(key, value) {
    this[key] = value;
  }

  getItem(key) {
    return this[key];
  }

}

export default new LocalStorage();
