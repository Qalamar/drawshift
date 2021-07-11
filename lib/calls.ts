import { compress, decompress } from "lzutf8";
import { supabase } from "./initSupabase";

interface userData {
  user_id: string;
  title: string;
  board: string;
  description: string;
}
export const createBoard = async (userData: userData) => {
  const { data, error } = await supabase.from("boards").insert([
    {
      user_id: userData.user_id,
      title: userData.title,
      description: userData.description,
      board: comp(userData.board),
    },
  ]);
  console.log(data);
  console.log("error", error);
};

export const saveBoard = async (userData: userData) => {
  const { data, error } = await supabase
    .from("boards")
    .update([
      {
        title: userData.title,
        board: comp(userData.board),
      },
    ])
    .eq("user_id", userData.user_id)
    .match({ title: userData.title });
  console.log(data);
  console.log("error", error);
};

export const decomp = (text: String) => {
  return decompress(text, {
    inputEncoding: "Base64",
  });
};

export const comp = (text: String) => {
  return compress(text, {
    outputEncoding: "Base64",
  });
};
