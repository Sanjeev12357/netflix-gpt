import OpenAI from "openai";
import { OPEN_AIKEY } from "./constant";

const openai=new OpenAI({
    apiKey:OPEN_AIKEY,
    dangerouslyAllowBrowser:true,
})

export default openai;