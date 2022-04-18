import { createContext, useContext, useReducer, useEffect } from "react";
import { useToast } from "../../hooks";
import { getCategories } from "../../utils";
import { categoryReducer } from "../reducers";

const CategoryContext = createContext();

const intialCategoryState = {
  error: null,
  loading: false,
  categories: [],
};

export const CategoryProvider = ({ children }) => {
  const [categoryState, categoryDispatch] = useReducer(
    categoryReducer,
    intialCategoryState
  );

  const { showToast } = useToast();

  useEffect(() => {
    getCategories(categoryDispatch, showToast);
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
