import { createContext, useContext, useReducer, useEffect } from "react";
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

  useEffect(() => {
    getCategories(categoryDispatch);
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
