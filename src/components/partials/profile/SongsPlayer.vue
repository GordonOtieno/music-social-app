<template>
    <div class="bg-green-500 rounded">
        <div id="aplayer"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';


onMounted(()=>{
    thePlayer();
})

const thePlayer = () =>{
    new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: 'First Song',
        artist: 'artist',
        url: '/music/battle-of-the-dragons-8037.mp3',
        cover: 'cover.jpg'
    },
    {
        name: 'Second Song',
        artist: 'artist',
        url: '/music/epic-hollywood-trailer-9489.mp3',
        cover: 'cover.jpg'
    },
]
});
}

</script>

<style lang="sass" scoped>

</style>
