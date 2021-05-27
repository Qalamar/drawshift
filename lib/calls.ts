import { compress, decompress } from "lzutf8";
import { supabase } from "./initSupabase";

interface userData {
  user_id: string;
  title: string;
  board: string;
  description: string;
}
export const saveBoard = async (userData: userData) => {
  const { data, error } = await supabase.from("boards").insert([
    {
      user_id: userData.user_id,
      title: userData.title,
      description: userData.description,
      board: compress(userData.board, {
        outputEncoding: "Base64",
      }),
    },
  ]);
  console.log(data);
};
