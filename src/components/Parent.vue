<template>
    <div id="parent">
        <a>

        </a>
        <div class="cssSlider">
            <ul class="slides">
                <li id="slide1"><img src='/images/1581999074_italy_vsthemes_ru-18.jpg' /></li>
                <li id="slide2"><img src='/images/tg-1.jpg' /></li>
                <li id="slide3"><img src='/images/shutterstock_785442694.jpg' /></li>
                <li id="slide4"><img src='/images/ae_3.jpg' /></li>

            </ul>
            <ul class="thumbnails">
                <li><a href="#slide1"><img src='/images/1581999074_italy_vsthemes_ru-18.jpg' /></a></li>
                <li><a href="#slide2"><img src='/images/tg-1.jpg' /></a></li>
                <li><a href="#slide3"><img src='/images/shutterstock_785442694.jpg' /> </a></li>
                <li><a href="#slide4"><img src='/images/ae_3.jpg' /></a></li>

            </ul>

        </div>
        <div class='good'>
            <h1>
                Лучшие направления
            </h1>
            <div class='better'>
                <div class='image-better'>
                    <img src='/images/92.jpg' />
                </div>
                <div class='image-better'>
                    <img src='/images/11.jpg' />
                </div>
                <div class='image-better'>
                    <img src='/images/12.jpg' />
                </div>
            </div>
        </div>
        <div class='fire'>
            <div class='image-fire'>
                <img src='/images/1bb5c28f10870397156d30851c229d31.jpg' />
                <div class="block-front"><span>Горящие туры</span></div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Parent"
    }
</script>
<style>
    .cssSlider {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    .cssSlider .slides {
        overflow: hidden;
        overflow: hidden;
        width: 100%;
        height: 70vmin;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .cssSlider .slides > li {
        width: 100%;
        height: 70vmin;
        position: absolute;
        z-index: 1;
        overflow: hidden;
    }
    .cssSlider .slides > li > img {
        width: 100%;
        height: auto;
    }
    /*
    .cssSlider .slides > li:first-child:not(:target) {
        z-index: 1;
        -webkit-transform: translateY(0%);
                transform: translateY(0%);
    }
    */
    .cssSlider .thumbnails {
        display: block;
        position: relative;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .cssSlider .thumbnails > li {
        float: left;
        width: 25%;
    }
    .cssSlider .thumbnails > li > a {
        display: block;
    }
    .cssSlider .thumbnails > li > a > img {
        width: 100%;
        height: 30%;
    }

    .cssSlider .slides li:target {
        z-index: 3;
        -webkit-animation: slide 1s 1;
    }
    .cssSlider .slides li:not(:target) {
        -webkit-animation: hidden 1s 1;
    }
    @-webkit-keyframes slide {
        0% {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
        }
        100% {
            -webkit-transform: translateX(0%);
            transform: translateX(0%);
        }
    }
    @keyframes slide {
        0% {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
        }
        100% {
            -webkit-transform: translateX(0%);
            transform: translateX(0%);
        }
    }
    @-webkit-keyframes hidden {
        0% {
            z-index: 2;
            -webkit-transform: translateX(0%);
            transform: translateX(0%);
        }
        100% {
            z-index: 2;
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
        }
    }
    @keyframes hidden {
        0% {
            z-index: 2;
            -webkit-transform: translateX(0%);
            transform: translateX(0%);
        }
        100% {
            z-index: 2;
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
        }
    }
</style>
