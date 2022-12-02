<script>
    export let finished;
    export let victory;
    export let onClick;
</script>
<style>
    .smiley {
        position: absolute;
        left: 50%;
        top: 50%;
        display: block;
        text-align: center;
        width: 32px;
        height: 32px;
        margin: -16px;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        border: 2px solid;
        border-color: #eee #999 #999 #eee;
        background-color: #ccc;
    }

    .smiley:active {
        border-color: #999 #eee #eee #999;
    }

    .icon {
        position: relative;
        margin: 2px;
        display: block;
        width: 24px;
        height: 24px;
        border: 2px solid #000;
        border-radius: 20px;
        background-color: #ff0;
    }

    .victory {
        background-color: #0f0;
    }

    .icon::before,
    .icon::after {
        content: '';
        position: absolute;
    }

    .icon::before {
        top: 6px;
        left: 50%;
        width: 8px;
        height: 4px;
        margin-left: -4px;
        border-left: 2px solid #000;
        border-right: 2px solid #000;
    }

    .icon::after {
        top: 12px;
        left: 50%;
        width: 12px;
        height: 5px;
        margin-left: -6px;
        border: 2px solid;
        border-width: 0 2px 2px;
        border-radius: 0 0 8px 8px;
    }

    .finished {
        background-color: #f00;
    }

    .finished::after {
        top: 10px;
        width: 8px;
        margin-left: -4px;
        border-width: 0 0 2px;
        border-radius: 0;
    }
</style>

<div class="smiley" on:click={onClick}>
    <span class="icon" class:victory={victory} class:finished={finished}></span>
</div>