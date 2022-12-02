<script>
    export let number = 0;
</script>

<style>
    .number {
        --border: 3px;
        --border-spacing: 1px;
        --color: #4c1e1e;
        --color-active: #f66;

        float: left;
        margin-left: var(--border);
        height: calc(var(--border) * 8 + var(--border-spacing) * 4);
        width: calc(var(--border) * 4 + var(--border-spacing) * 2);
        position: relative;
    }

    .number:first-child {
        margin-left: 2px;
    }

    .number::before,
    .number::after {
        content: '';
        display: block;
        border: var(--border) solid;
        width: calc(var(--border) * 4);
        height: calc(var(--border) * 4);
        position: absolute;
    }

    .number::before {
        top: 0;
        border-color: var(--color) transparent transparent transparent;
    }

    .number::after {
        bottom: 0;
        border-color: transparent transparent var(--color) transparent;
    }

    .inner {
        position: absolute;
        display: block;
        width: calc(var(--border) * 4 + var(--border-spacing) * 2);
        height: calc(var(--border) * 4);
        left: calc(-1 * var(--border-spacing));
        border: var(--border) solid;
        border-color: transparent var(--color) transparent var(--color);
    }

    .inner::after {
        position: absolute;
        width: calc(var(--border) * 4);
        height: calc(var(--border) * 4);
        content: '';
        display: block;
        border: var(--border) solid;
        border-width: calc(var(--border)/2) var(--border);
    }

    .inner--top {
        top: 1px;
        border-width: var(--border) var(--border) calc(var(--border) / 2);
    }

    .inner--top::after {
        top: calc(-1 * var(--border) + var(--border-spacing));
        left: calc(-1 * var(--border) + var(--border-spacing));
        border-color: transparent transparent var(--color) transparent;
    }

    .inner--bottom {
        bottom: var(--border-spacing);
        border-width: calc(var(--border)/2) var(--border) var(--border);
    }

    .inner--bottom::after {
        top: calc(-1 * var(--border)/2 - var(--border-spacing));
        left: calc(-1 * var(--border) + var(--border-spacing));
        border-color: var(--color) transparent transparent transparent;
    }

    .number--1 .inner {
        border-right-color: var(--color-active);
    }

    .number--2::before {
        border-top-color: var(--color-active);
    }

    .number--2 .inner--top {
        border-right-color: var(--color-active);
    }

    .number--2 .inner--top::after {
        border-bottom-color: var(--color-active);
    }

    .number--2 .inner--bottom::after {
        border-top-color: var(--color-active);
    }

    .number--2 .inner--bottom {
        border-left-color: var(--color-active);
    }

    .number--2::after {
        border-bottom-color: var(--color-active);
    }

    .number--3::before {
        border-top-color: var(--color-active);
    }

    .number--3 .inner {
        border-right-color: var(--color-active);
    }

    .number--3 .inner--top::after {
        border-bottom-color: var(--color-active);
    }

    .number--3 .inner--bottom::after {
        border-top-color: var(--color-active);
    }

    .number--3::after {
        border-bottom-color: var(--color-active);
    }

    .number--4 {
        border-left-color: var(--color-active);
    }

    .number--4 .inner {
        border-right-color: var(--color-active);
    }

    .number--4 .inner--top {
        border-left-color: var(--color-active);
    }

    .number--4 .inner--top::after {
        border-bottom-color: var(--color-active);
    }

    .number--4 .inner--bottom::after {
        border-top-color: var(--color-active);
    }

    .number--5::before {
        border-top-color: var(--color-active);
    }

    .number--5 .inner--top {
        border-left-color: var(--color-active);
    }

    .number--5 .inner--top::after {
        border-bottom-color: var(--color-active);
    }

    .number--5 .inner--bottom::after {
        border-top-color: var(--color-active);
    }

    .number--5 .inner--bottom {
        border-right-color: var(--color-active);
    }

    .number--5::after {
        border-bottom-color: var(--color-active);
    }

    .number--6::before {
        border-top-color: var(--color-active);
    }

    .number--6 .inner--top {
        border-left-color: var(--color-active);
    }

    .number--6 .inner--top::after {
        border-bottom-color: var(--color-active);
    }

    .number--6 .inner--bottom::after {
        border-top-color: var(--color-active);
    }

    .number--6 .inner--bottom {
        border-right-color: var(--color-active);
        border-left-color: var(--color-active);
    }

    .number--6::after {
        border-bottom-color: var(--color-active);
    }

    .number--7 .inner {
        border-right-color: var(--color-active);
    }

    .number--7::before {
        border-top-color: var(--color-active);
    }

    .number--8 .inner {
        border-right-color: var(--color-active);
        border-left-color: var(--color-active);
    }

    .number--8::after {
        border-bottom-color: var(--color-active);
    }

    .number--8::before {
        border-top-color: var(--color-active);
    }

    .number--8 .inner--top::after {
        border-bottom-color: var(--color-active);
    }

    .number--8 .inner--bottom::after {
        border-top-color: var(--color-active);
    }

    .number--9 .inner {
        border-right-color: var(--color-active);
    }

    .number--9 .inner--top {
        border-left-color: var(--color-active);
    }

    .number--9::after {
        border-bottom-color: var(--color-active);
    }

    .number--9::before {
        border-top-color: var(--color-active);
    }

    .number--9 .inner--top::after {
        border-bottom-color: var(--color-active);
    }

    .number--9 .inner--bottom::after {
        border-top-color: var(--color-active);
    }

    .number--0 .inner {
        border-right-color: var(--color-active);
        border-left-color: var(--color-active);
    }

    .number--0::after {
        border-bottom-color: var(--color-active);
    }

    .number--0::before {
        border-top-color: var(--color-active);
    }
</style>

<div class="number number--{number}">
    <span class="inner inner--top"></span>
    <span class="inner inner--bottom"></span>
</div>