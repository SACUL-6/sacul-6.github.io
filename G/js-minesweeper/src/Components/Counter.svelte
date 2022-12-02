<script>
    import Number from './Number.svelte';
    export let position = 'left';
    export let number = 0;
    $: value = `00${number}`.slice(-3);
</script>
<style>
    .counter {
        width: 56px;
        height: 34px;
        padding: 2px;
        position: relative;
        margin: 4px;
        border: 1px inset #eee;
        background-color: #000;
    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }
</style>
<div class="counter {position}">
    <Number number={value[0]}/>
    <Number number={value[1]}/>
    <Number number={value[2]}/>
</div>