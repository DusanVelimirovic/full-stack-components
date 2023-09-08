import axios from "axios";
import { updateStart, updateSuccess, updateFailure } from "./userSlice"; // Import reducers

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post(
      "http://localhost:8800/api/users/:id/update",
      user
    );
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailure());
  }
};
