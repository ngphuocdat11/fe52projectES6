import { API_URL } from './../config/index.js';

const callapi = (uri, method = 'GET', data) => {
  return axios({
    url: API_URL + uri,
    method,
    data,
  });
};

const getListProductService = () => {
  return axios({
    url: 'https://5f5c7a345e3a4d0016249415.mockapi.io/api/SanPham',
    method: 'GET',
  });
};

const deleteProductService = (id) => {
  return axios({
    url: `https://5f5c7a345e3a4d0016249415.mockapi.io/api/SanPham/${id}`,
    method: 'DELETE',
  });
};

const addProductService = (product) => {
  return axios({
    url: `https://5f5c7a345e3a4d0016249415.mockapi.io/api/SanPham`,
    method: 'POST',
    data: product,
  });
};

const getProductById = (id) => {
  return axios({
    url: `https://5f5c7a345e3a4d0016249415.mockapi.io/api/SanPham/${id}`,
    method: 'GET',
  });
};

const updateProductService = (product) => {
  return axios({
    url: `https://5f5c7a345e3a4d0016249415.mockapi.io/api/SanPham/${product.id}`,
    method: 'PUT',
    data: product,
  });
};
export {
  callapi,
  getListProductService,
  deleteProductService,
  addProductService,
  getProductById,
  updateProductService,
};
