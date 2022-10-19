import { api } from "../utils/conections";

export const proveedorService = () => {
  const getAllData = async () => {
    try {
      const { data } = await api.get("/proveedor");
      return data;
    } catch (error) {
      throw error;
    }
  };

  const getData = async (id) => {
    try {
      const { data } = await api.get(`/proveedor/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  };
  const saveData = async (data) => {
    try {
      const { data } = await api.post("/proveedor", data);
      return data;
    } catch (error) {
      throw error;
    }
  };
  const updateData = async (data) => {
    try {
      const { data } = await api.put("/proveedor", data);
      return data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getAllData,
  };
};
