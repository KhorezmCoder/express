# Express.js TypeScript Loyihasini Sozlash

Bu loyihada Express.js ni TypeScript bilan sozlash jarayoni ketma-ketlikda ko'rsatilgan.

## Loyihani Boshlash

### 1. Loyiha papkasini yaratish
```bash
mkdir project
```

### 2. Loyiha papkasiga kirish
```bash
cd project
```

### 3. Git repositoriyasini boshlash
```bash
git init
```

### 4. Node.js loyihasini yaratish
```bash
npm init -y
```

## Kerakli Paketlarni O'rnatish

### 5. Express.js ni o'rnatish
```bash
npm i express
```

### 6. TypeScript ni o'rnatish (development dependency)
```bash
npm i -D typescript
```

### 7. VS Code da ochish
```bash
code .
```

## Kod Yozish

### 8. Asosiy server kodi (dastlabki versiya)
`src/index.ts` faylida:
```typescript
import express from 'express';
const app = express();
const PORT = 3000;
app.listen()
```

### 9. Express type definitions ni o'rnatish
```bash
npm i -D @types/express
```

### 10. To'liq server kodi
`src/index.ts` faylida:
```typescript
import express from 'express';
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`${PORT} ishga tushdi✅`);
});
```

## TypeScript Konfiguratsiyasi

### 11. TypeScript konfiguratsiya faylini yaratish
```bash
npx tsc --init
```

### 12. TypeScript kodini JavaScript ga compile qilish
```bash
npx tsc --build
```

### 13. Compiled kodini ishga tushirish
```bash
node ./dist/index.js
```

## Package.json Konfiguratsiyasi

### 14. Oxirgi `package.json` fayli
```json
{
  "name": "express_you_tube",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc --build",
    "start": "node dist/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "@types/express": "^5.0.5",
    "typescript": "^5.9.3"
  }
}
```

## Loyihani Ishga Tushirish

### Build qilish
```bash
npm run build
```

### Ishga tushirish
```bash
npm start
```

## Loyiha Struktura

```
project/
├── src/
│   └── index.ts
├── dist/
│   └── index.js (compiled)
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
```

## Muhim Eslatmalar

- TypeScript kodlari `src/` papkasida yoziladi
- Compiled JavaScript kodlari `dist/` papkasida saqlanadi
- `@types/express` paketi TypeScript uchun type definitions beradi
- `npm run build` buyrug'i TypeScript kodini JavaScript ga o'giradi
- `npm start` buyrug'i compiled kodini ishga tushiradi

