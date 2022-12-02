<script>
    import Mine from './Mine.svelte';
    import Flag from './Flag.svelte';

    export let onMouseDown = () => {};
    export let didExplode = false;
    export let isOpen = false;
    export let isMined = false;
    export let isFlagged = false;
    export let count = 0;
    export let gameFinished = false;
</script>

<style>
    .field {
        position: relative;
        color: transparent;
        float: left;
        display: block;
        text-align: center;
        width: 24px;
        height: 24px;
        font-size: 16px;
        font-weight: bold;
        line-height: 20px;
        cursor: pointer;
        border: 2px solid;
        border-color: #eee #999 #999 #eee;
        background-color: #ccc;
    }

    .is-open {
        background-color: #bbb;
        padding: 1px;
        cursor: default;
        border: dotted 1px #999;
        border-left-color: transparent;
        border-top-color: transparent;
    }

    .count-0 {
        color: transparent;
    }

    .count-1 {
        color: #33c;
    }

    .count-2 {
        color: #060;
    }

    .count-3 {
        color: #c00;
    }

    .count-4 {
        color: #606;
    }

    .count-5 {
        color: #066;
    }

    .count-6,
    .count-7,
    .count-8 {
        color: #000;
    }

    .is-mined {
        padding: 2px;
    }

    .is-flagged {
        padding: 5px 8px;
    }

    .is-flagged-wrong::before,
    .is-flagged-wrong::after {
        content: '';
        display: block;
        width: 26px;
        border: 1px solid #f00;
        top: 9px;
        left: -3px;
        position: absolute;
    }

    .is-flagged-wrong::before {
        transform: rotate(45deg);
    }

    .is-flagged-wrong::after {
        transform: rotate(-45deg);
    }

    .is-mined.did-explode {
        padding: 3px;
        background-color: #f00;
    }
</style>

<span
    class="field count-{count}"
    class:did-explode={didExplode}
    class:is-open={isOpen}
    class:is-flagged={isFlagged}
    class:is-mined={isMined && !isFlagged}
    class:is-flagged-wrong={gameFinished && !isMined && isFlagged}
    on:mousedown={onMouseDown}
>
    {#if isFlagged}
        <Flag />
    {:else if isMined && gameFinished || didExplode}
        <Mine />
    {:else if isOpen && count}
        {count}
    {/if}
</span>