# Visual-Thinking-API
API created with express to get student infotmation.

## Dependencies

<details>
<summary>Dependencies </summary>
Express
  
- Istallation 
  
```
npm i express -S
```
</details>


<details>
<summary>DevDependencies </summary>
Eslint
  
- Installation
  
```
npm install eslint --save-dev
```

- Configuration file generation
  
```
npm init @eslint/config
```
  
- Eslint rules

```
"rules": {
      indent: ["error", 4],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"]
  }
```
 
Jest
  
- Installation
  
```
npm install jest@26.6.0 --save-dev
```
 
</details>

## Package.json config

```
  "scripts": {
    "test": "node ./node_modules/.bin/jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
  }
```

## GitHub Actions Config

In  `.github/workflows/test.yml`

```yml
name: Run Tests in my project every push on GitHub
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Run Jest
      uses: stefanoeb/jest-action@1.0.3
```


