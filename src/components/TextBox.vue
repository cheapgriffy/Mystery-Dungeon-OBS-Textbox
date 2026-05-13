<script setup>
import { ref, onMounted } from 'vue';
import { useTimestamp } from '@vueuse/core';
import { formatTimestamp } from '../utils/formatTimestamp.js';

const current_timestamp = useTimestamp({ offset: 0 })

const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));


const props = defineProps({
    phrases: Array,
    sleepTime: {
        type: Number,
        default: 100,
    },
    username: {
        type: String,
        default: "Voice from the deep",
    },
    // will display phrases[0] if false
    isTypeWriter: {
        type: Boolean,
        default: true,
    },
    isUsername: {
        type: Boolean,
        default: true,
    },
    isDate: {
        type: Boolean,
        default: false,
    }
})


const displayedText = ref('')

/**
 * edit displayed text, letter by letterm cicle through phrases
 */
const writeLoop = async () => {
    let curPhraseIndex = 0;

    while (true) {
        let currWord = props.phrases[curPhraseIndex];

        //? Writing
        for (let i = 0; i < currWord.length; i++) {
            displayedText.value = currWord.substring(0, i + 1)
            await sleep(props.sleepTime);
        }

        await sleep(props.sleepTime * 50);

        //? Erasing
        for (let i = currWord.length; i >= 0; i--) {
            displayedText.value = currWord.substring(0, i - 1);
            await sleep(props.sleepTime / 2)
        }

        await sleep(props.sleepTime * 20);

        // circular buffer, reset to zero when finished
        // currphraseIndex incremented and rested if == lenght
        curPhraseIndex = (curPhraseIndex + 1) % props.phrases.length;
    }
}

// Executed at runtime
onMounted(() => {
    if (props.isTypeWriter) {
        writeLoop();
    } else {
        displayedText.value = props.phrases[0];
    }
})

</script>


<template>
    <div class="textbox px-5 py-2 text-2xl">
        <p class="text-white">
            <span v-if="isDate == true" class="text-grey-600">{{ formatTimestamp(current_timestamp) }} <br></span>
            <span v-if="isUsername == true" class="text-yellow-400">{{ props.username }} : </span>
            <span>{{ displayedText }}</span>
        </p>
    </div>
</template>


<style>
.textbox {
    image-rendering: pixelated;
    background-image: url(/images/PmdTextbox.webp);
    background-size: cover;

    /* initial size */
    width: calc(241px * 1.6);
    height: calc(53px * 1.6);
}
</style>