# Day 1 Jan 27, 2025 4:38 AM

- Just finished taking a Java Assessment test and started breaking down project into smaller parts.

  - Decided on using React with TypeScript and this is the initial commit.
  - Plan it to get project working in browser with basic grid view just like the My Life in 4K Weeks poster I have in the room.
  - ![Add Poster Image Here]()

- TypeScript must be compiled to JavaScript code
- Check if I have TypeScript compiler installed on machine
- [Downloading TypeScript onto Machine](https://www.typescriptlang.org/download/)
- Ran `npm install --save-dev typescript` to install TypeScript for project and it added `"typescript": "^5.7.3"` to my package.json dependencies.
- [TypeScript Handbook + Documentation](https://www.typescriptlang.org/docs/handbook/intro.html)
- Verified node version with `node -v` and I'm on version `v23.2.0`
- Learned the difference between .ts and .tsx:
  - .ts: is for backend TypeScript code usually utilities, libraries, helper functions, and type definition. Not intended to be used with JSX (JavaScript XML).
  - .tsx: TypeScript files with JSX, used for React components.
- Some basic types in TypeScript are: string, number, boolean.
- Because I don't have the TypeScript compiler installed on my machine I could not use `tsc app.ts` and instead had to use `npx tsc app.ts` in order to get my compiled code.
  - After I compiled I noticed my JavaScript code has the keyword `var` which is recognized in older browser versions.
- `Union Types` are defined liked this: `let userId: string | number = "abc123";` and this is valid.

# Day 2 Jan 29th, 2025 12:43 PM

- Started on creating grid squares just to see if I can make them show up.
- Installed `npm install react react-dom` & `npm install --save-dev @types/react@types/react-dom` so I could create the Grid and Square components.
- Tried to compile using `npx tsc app.tsx` but got an error of: `app.tsx:1:8 - error TS1259: Module '"/Users/armandoarteaga/Github Repos/MyWeeksLeft/node_modules/@types/react/index"' can only be default-imported using the 'esModuleInterop' flag`
  - Added a `tsconfig.json` file with the `CompilerOptions` of `esModuleInterop` set to true.
  - esModuleInterop: true tells TypeScript to allow default imports from CommonJS modules, making imports more flexible.
- Started over and I'm going to use Vite to install a fresh React App. Used the commend `npm create vite@latest` to install a fresh app & ran `npm install`
- [Vite Documentation](https://vite.dev/guide/)
- [React Documentation](https://react.dev/learn)

---

- Installed `npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
