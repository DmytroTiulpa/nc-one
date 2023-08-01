<!--
<script setup>

</script>

<template>

</template>

<style scoped>

</style>
-->

<template>

    <div class="uk-grid-collapse uk-grid-match uk-text-center" data-uk-grid>
        <div class="uk-width-1-4" style="height: 100vh;">
            <div class="uk-tile uk-tile-default">

                <div class="uk-flex uk-flex-center uk-margin-large-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" height="6em" viewBox="0 0 28 34" class="uk-margin-small-right uk-svg">
                        <polygon points="19.1 4.1 13.75 1 8.17 4.45 13.6 7.44 19.1 4.1" fill="#fff"></polygon>
                        <path d="M21.67,5.43,16.14,8.77,22.4,12.4v9.52l-8.44,4.76L5.6,21.93V14.55L0,11.7V25.21l13.75,8.08L28,25.21V9.07Z" fill="#fff"></path>
                    </svg>
                </div>

                <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-1">
                    <ul class="uk-nav-primary" data-uk-nav>
                        <li class="uk-active"><a href="#">MENU ITEM 1</a></li>
                        <li class=""><a href="#">MENU ITEM 2</a></li>
                        <li class=""><a href="#">MENU ITEM 3</a></li>
<!--                        <li class="uk-parent">
                            <a href="#">Parent <span uk-nav-parent-icon></span></a>
                            <ul class="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                        <li class="uk-parent">
                            <a href="#">Parent <span uk-nav-parent-icon></span></a>
                            <ul class="uk-nav-sub">
                                <li><a href="#">Sub item</a></li>
                                <li><a href="#">Sub item</a></li>
                            </ul>
                        </li>
                        <li class="uk-nav-header">Header</li>
                        <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                        <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>-->
                    </ul>
                </div>

            </div>
        </div>
        <div class="uk-width-3-4">
            <div class="uk-tile uk-tile-muted">
                <h1>Привет {{ username }}!</h1>
                <p class="uk-h4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid animi beatae consectetur cumque delectus, dicta eligendi enim est impedit ipsa iusto maiores molestias nisi pariatur perferendis quas quidem quo suscipit unde? Beatae cumque deserunt est eum excepturi fuga incidunt inventore maxime pariatur rerum, tenetur veniam, voluptate. Accusantium asperiores consectetur consequuntur cumque dolorem eaque ipsam minus, modi natus nemo nobis nulla obcaecati perferendis, quo vitae! Blanditiis doloribus iusto similique. Atque consectetur eum ex facilis hic, id maxime minus nobis nostrum quae quidem sint tempora ullam. A accusantium autem dicta, eligendi exercitationem illo maxime nam, nulla quae, quam quisquam recusandae voluptates!</p>
            </div>
        </div>
    </div>

</template>

<script>
    import {defineComponent} from "vue";

    export default defineComponent({
        components: {},
        setup() {
            return {
                username: 'dimon'
            };
        },
    });
</script>

<style scoped>

</style>
