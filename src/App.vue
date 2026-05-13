<script setup>
import { onMounted } from 'vue';
import TextBox from './components/TextBox.vue';

// url param object, can be accessed from get('')
const params = new URLSearchParams(window.location.search)

//TODO get les param pour toute les propriété de la textbox
const phrasesParam = params.get('phrases')

// fallsback to default phrases if none
const displayedPhrases = phrasesParam
	? phrasesParam.split(',').map(phrase => phrase.trim())
	: [
		"Hey, its working!",
		"Edit the lines with phrases param",
		"Or just use the GUI to make a url",
		"well if i got time to do that..."
	];

</script>

<template>
	<TextBox id="textbox" 
		:phrases="displayedPhrases"
		:username="params.get('username')" 
		:sleepTime="50"
		:isUsername="params.get('username') ? true : false"
		:isTypeWriter="params.get('typewriter') == 'true'" 
		:isDate="params.get('date') == 'true'" />
</template>

<style scoped>
@font-face {
	font-family: "WonderMail";
	src: url("fonts/wondermail.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

#textbox {
	font-family: "WonderMail";
}
</style>
