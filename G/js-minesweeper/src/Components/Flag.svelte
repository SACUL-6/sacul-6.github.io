<style>
    .mast {
        --size: 12px;
        display: block;
        width: calc(var(--size) / 4);
        height: var(--size);
        background: #000;
        position: relative;
        transform: scale(.5);
    }

    .mast::before,
    .mast::after {
        display: block;
        position: absolute;
        width: var(--size);
        content: '';
        height: calc(var(--size) / 4);
        background: #000;
        bottom: calc(var(--size) / -4);
        left: calc(var(--size) / -4 - var(--size) / 8);
    }

    .mast::after {
        width: calc(var(--size) + var(--size) / 2);
        bottom: calc(-1 * var(--size) / 2);
        left: calc(-1 * var(--size) / 4 - var(--size) / 4 - var(--size) / 8);
    }

    .flag {
        display: block;
        border: var(--size) solid;
        border-color:  transparent #c00 transparent transparent ;
        border-width: calc(var(--size) / 2 + var(--size) / 8) var(--size);
        position: absolute;
        top: calc(-1 * var(--size) + var(--size) / 8);
        left: calc(-1 * var(--size) - var(--size) / 2 - var(--size) / 4);
    }
</style>

<span class="mast">
    <span class="flag"></span>
</span>