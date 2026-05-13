# PMD Textbox

Render a Pokemon Mystery Dungeon Explorer of Sky Textbox style blanc page, with customization and a typewriter effect.

Initially a personal project for my OBS scene, i decided to make it public as i think it could be useful for other people, and also to get some feedback on the code and maybe some contributions.

Using Vue 3, tailwindcss and vite. Working mainly with the composition API, and using some of the vueuse/core composables.
Operable from params, with the following options:

## Params

- `phrases`: A comma-separated list of phrases to display (default: sample array)
- `username`: The username to display (default: "Voice from the deep")
- `sleepTime`: The time (in milliseconds) to wait between each character (default: 50)
- `typewriter`: Whether to enable the typewriter effect (default: true)
- `date`: Whether to display the current date in hh/mm/ss dd/mm/yy format (default: false)

## How to use ?
You can use this project in your OBS scene by adding a new browser source and pointing it to the URL of your local server (e.g., `http://localhost:3000`).
Or through the provided url in the github repo.
You can also customize the appearance of the textbox by modifying the CSS styles in the `TextBox.vue` component.

Here is a example of a correct url *order dont matter* <br>
``http://localhost:5173/?username=Cutie&phrases=Hey%20its%20working,%20a%20Gui%20is%20on%20its%20way%20to%20edit%20this%20easily&date=true&typewriter=true``


## Project Setup
After cloning the repository, navigate to the project directory and run the following command to install the dependencies:

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
