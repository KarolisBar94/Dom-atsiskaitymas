const API = {
  async getCars() {
    try {
      const response = await fetch('http://localhost:8080/Cars');
      const cars = await response.json();

      return cars;
    } catch (error) {
      return error;
    }
  },

async deleteCar(id){
  try {
    const response = await fetch(`http://localhost:8080/Cars/${id}`, {
      method: 'delete',
    });
    const deletedCar = await response.json();

    return deletedCar;
  } catch (error) {
    return error;
  }
}

};

export default API;