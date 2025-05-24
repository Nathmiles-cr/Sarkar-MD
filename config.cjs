// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0g4Zmp1MEJzUlBWYTZNWFhjZUJJN3ZQVXFKb3hSdUNJbXJLSFNYbURIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUp4L2ZvVXgvcmNJbEZidHRGV0dNRi8yeFlMeHpuaDViQThuUWN2ZzFXdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR0JyNEdpbW1MOEl3WnhPN0x6QlgwN05UUDlOMXZaeUhYY3dKWXppUFdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWQzEzemlueE1wYWlpRnozUG9tVGkrUGtwZFhYRks5SEJpM014YlFJTjMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9LVGd3RCtJSWZvMkN0Y055dExseHBhQ2hSMmhBdWFkUGhYNnNBNnRORjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc2eTRiVGpiSTNjM0hBU2h0NUJTTjlaYUtXQTY2RG8zR0hVKzhIT1ZGbEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VuNTNCNlM1M1pPYjROMElmbDQ5elhYN3BhVEhhVDEzQ1J3dXRxNTAxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3JKbHkvSVhZcWZuTnp4VDVIeG9mVm5WTHZvWmdQVzhkeCs1ck5uWWZqOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp0MEpLemdHck1NVm1XUTQ5NFJwYk1aNXJVT1JtR3IrYUREa0U2Ti9FTW9pQW5aY295N3pkM0hqOUNaZ25kZ3JoanFuU1E0VUd6YVFDQUJBVi9KeEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJEV3lYZmQvOGU5d1Z0c2pSZ0IzaFZjUEJQalk5aDJDQVVyelo0cWVmTDgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxMjNMT1RVUyIsIm1lIjp7ImlkIjoiMjU1NjE2NDQyMDEwOjU4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjc2OTQwMDExMzUyMTAxOjU4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1gyaFNrUTRQL0l3UVlZR0NBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicnljanhsOWdhRUx4Y2JrQXdVbUZ4d2crUE5XSEQ2TnhIalVhZW52UmREST0iLCJhY2NvdW50U2lnbmF0dXJlIjoic3ZBbXVwcGlXeW1JVExCQys5VXY0bWxNdEd1SHU2U21IWmhYWEhHYnN0N2t2cVM5M1FZRXRPcFIrMGExQW0vcy9NYmw5L1p4cDRxRm4wUFovUmN6QUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlRSUkZBVXdsdlJ6dDUyNklUcDdpQ3pjeXRlWWpwMFNCTG96V2JpSzdZVThiQVpBd0lFbDBuTHV6MERtamtaVDJHNFlYNkg5ZEl3RzVJZnE0amhqMkF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjE2NDQyMDEwOjU4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE4bkk4WmZZR2hDOFhHNUFNRkpoY2NJUGp6Vmh3K2pjUjQxR25wNzBYUXkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0ODEyMzYyMSwibGFzdFByb3BIYXNoIjoiM2dQVUprIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPNysifQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : false,
  CHAT_BOT: process.env.CHAT_BOT !== undefined ? process.env.CHAT_BOT === 'true' : false,
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "©Bandaheali",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255616442010",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
