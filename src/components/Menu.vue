<template>
    <div id="menu">
        <div class='header'>
        <div class='menu-helper'>
            <li class="mh-phone">
                <a href="/about/branches/">Все контакты</a>
            </li>
            <li class="mh-phone">
                +375 17 311 10 10
            </li>
            <li class="mh-phone">
                EUR:
                <span id="eurCurr">
						2.9679
					</span>
            </li>
            <li class="mh-phone">
                USD:
                <span id="usdCurr">
						2.5198
					</span>
            </li>
        </div>
        <div class='nav-menu'>
            <li class="type-1"><a class="green-color" href="/poisk_turov_vo_vse_strany">Поиск тура</a></li>
            <li class="type-1"><a class="green-color" href="/all_tour">Туры</a></li>
            <li class="type-1"><a class="green-color" href="/users">Туристам</a></li>
            <li class="type-1"><a class="green-color" href="/agents">Агентам</a></li>
            <li class="type-1"><a class="green-color" href="/flights">Авиабилеты</a></li>
            <li class="type-1"><a class="green-color" href="/about">О компании</a></li>
            <li class="type-1"><a class="green-color" href="/">Главная</a></li>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>
