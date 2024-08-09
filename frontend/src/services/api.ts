import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export interface ConlangRequest {
  vowels: string[];
  consonants: string[];
  //TODO IMPLEMENT CONLANG REQUEST WITH USER MAPPING 
  
}

export interface ConlangResponse {
  name: string;
  phonemes: string[];
  grammar_rules: {
    word_order: string;
    cases: number;
    genders: number;
  };
  words: string[];
}

export const generateConlang = async (
  request: ConlangRequest
): Promise<ConlangResponse> => {
  try {
    const response = await axios.post<ConlangResponse>(
      `${API_BASE_URL}/generate`,
      request
    );
    return response.data;
  } catch (error) {
    console.error("Error generating conlang:", error);
    throw error;
  }
};
