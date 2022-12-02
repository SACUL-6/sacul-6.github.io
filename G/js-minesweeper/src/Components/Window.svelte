<script>
    import Game from './Game.svelte';
</script>
<style>
    :global(*),
    :global(*::before),
    :global(*::after) {
        box-sizing: border-box;
    }

    :global(body) {
        background: #008080;
    }

    .window {
        margin: 20px auto;
        width: 735px;
        color: #000;
        font-family: 'Arial',sans-serif;
        background: #c0c0c0;
        border: 1px solid;
        border-top-color: #dfdfdf;
        border-left-color: #dfdfdf;
        border-right-color: #000;
        border-bottom-color: #000;
    }

    .inner {
        border: 1px solid;
        border-top-color: #fff;
        border-left-color: #fff;
        border-right-color: #808080;
        border-bottom-color: #808080;
    }

    .heading {
        margin: 2px 2px 0;
        padding: 1px 2px;
        color: #fff;
        background: linear-gradient(to right, #000080, #1084d0);
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
    }

    .heading-icon {
        background-image: url('data:image/png;base64,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');
        background-size: 16px 16px;
        background-repeat: no-repeat;
        margin-right: 4px;
        width: 16px;
        height: 16px;
        float: left;
    }

    .actions {
        padding: 4px 8px;
        font-size: 11px;
    }

    .content {
        margin: 0 2px 2px 2px;
        border: 1px solid;
        border-top-color: #808080;
        border-left-color: #808080;
        border-bottom-color: #fff;
        border-right-color: #fff;
        font-size: 13px;
    }

    .content-inner {
        background: #fff;
        border: 1px solid;
        border-top-color: #000;
        border-left-color: #000;
        border-bottom-color: #dfdfdf;
        border-right-color: #dfdfdf;
    }

    .game {
        background-color: transparent;
        border-radius: 0;
        padding: 0;
        border: 0;
        cursor: pointer;
        white-space: nowrap;
        outline: 0;
    }

    .game:active {
        background-color: #999;
    }
</style>

<div class="window">
    <div class="inner">
        <div class="heading">
            <div class="heading-icon"></div>
            Minesweeper
        </div>
        <div class="actions">
            <button type="button" class="game">Game</button>
        </div>
        <div class="content">
            <div class="content-inner">
                <Game />
            </div>
        </div>
    </div>
</div>