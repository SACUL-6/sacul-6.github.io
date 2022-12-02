<style>
    .mine {
        --size: 16px;
        --pin: calc(var(--size) / 4);
        display: block;
        width: var(--size);
        height: var(--size);
        border-radius: var(--size);
        background-color: #000;
        position: relative;
        transform: scale(.75);
    }

    .mine::before,
    .mine::after {
        content: '';
        display: block;
        width: calc(var(--size) + var(--pin));
        height: var(--pin);
        background-color: #000;
        position: absolute;
        left: calc(var(--pin) / -2);
        top: calc(var(--size) / 2 - var(--pin) / 2);
    }

    .mine::before {
        transform: rotate(90deg);
    }

    .mine > .mine {
        transform: rotate(45deg);
    }

    .mine::before,
    .mine::after {
        height: calc(var(--pin) / 2);
        top: calc(var(--size) / 2 - var(--pin) / 4);
    }

    .shadow {
        border: calc(var(--size) / 8) solid #fff;
        border-radius: 100%;
        position: absolute;
        z-index: 1;
        top: calc(var(--size) / 8 * 2);
        left: calc(var(--size) / 8) ;
    }
</style>

<span class="mine">
    <span class="mine">
        <span class="shadow"></span>
    </span>
</span>