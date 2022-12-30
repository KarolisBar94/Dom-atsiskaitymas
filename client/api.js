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
  console.log(`siunciama uzklausa`);

}

};

export default API;