import { categoryActions } from "../context/constants";
import { getCategoriesService } from "../services";

export const getCategories = async (categoryDispatch, showToast) => {
  try {
    categoryDispatch({ type: categoryActions.LOADING });

    const {
      data: { categories },
      status,
    } = await getCategoriesService();

    if (status >= 200 && status < 300) {
      categoryDispatch({
        type: categoryActions.GET_CATEGORY,
        payload: categories,
      });

      showToast("Get all categories success!", "success");
    }
  } catch (error) {
    categoryDispatch({ type: categoryActions.ERROR, payload: error });

    showToast(`${error}`, "error");
  }
};
