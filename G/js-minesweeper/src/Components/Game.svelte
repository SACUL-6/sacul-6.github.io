<script>
    import Smiley from './Smiley.svelte';
    import Counter from './Counter.svelte';
    import Field from './Field.svelte';

    const rows = 16;
    const cols = 30;
    const mines = 99;

    let minesLeft = mines;
    let fieldsLeft = rows * cols - mines;
    let interval = null;
    let time = 0;
    let gameStarted = false;
    let gameFinished = false;
    let gameVictory = false;
    let map = [];

    const getCellIndex = (x, y) => y * cols + x;

    const getIndexCords = i => ({
        x: i - Math.floor(i / cols) * cols,
        y: Math.floor(i / cols),
    });

    const getCellByIndex = index => map[index];

    const setCellByIndex = (index, data = {}) => map[index] = Object.assign(map[index], data);

    const getInitialMap = (x, y) => [...Array(x * y)].map(() => ({
        isMined: false,
        isFlagged: false,
        isOpen: false,
        didExplode: false,
        count: 0,
    }));

    const handleMouseDown = index => event => {
        event.preventDefault();
        const shouldFlag = event.which === 3 || event.button === 2;
        if (shouldFlag) {
            flagCell(index);
            return;
        }
        openCell(index);
    };

    const generateFieldMap = (cols, rows, mines) => {
        map = getInitialMap(cols, rows);

        for (let i = 0; i < mines; i++) {
            setRandomMine();
        }

        for (let i = 0; i < rows * cols; i++) {
            const { isMined } = getCellByIndex(i);
            if (!isMined) {
                setCellByIndex(i, {
                    count: getSurroundingCount(i),
                });
            }
        }

        return map;
    };

    const setRandomMine = () => {
        const index = Math.floor(Math.random() * rows * cols);
        const { isMined } = getCellByIndex(index);
        if (!isMined) {
            setCellByIndex(index, {
                isMined: true,
            });
            return;
        }
        setRandomMine();
    };

    const getSurroundingFields = index => {
        const { x, y } = getIndexCords(index);
        return [
            { x: x - 1, y: y - 1 },
            { x: x - 1, y: y },
            { x: x - 1, y: y + 1 },
            { x: x, y: y - 1 },
            { x: x, y: y + 1 },
            { x: x + 1, y: y - 1 },
            { x: x + 1, y: y },
            { x: x + 1, y: y + 1 },
        ]
            .filter(({ x, y }) => x >= 0 && y >= 0 && x < cols && y < rows)
            .map(({ x, y }) => getCellIndex(x, y));
    };


    const getSurroundingCount = index =>
        getSurroundingFields(index)
            .map(index => getCellByIndex(index).isMined ? 1 : 0)
            .reduce((sum, value) => sum + value, 0);

    const openCell = index => {
        const { isOpen, isFlagged, isMined, count } = getCellByIndex(index);

        if (!isOpen) {
            if (!gameStarted) {
                if (isMined) {
                    startGame();
                    openCell(index);
                    return;
                }

                gameStarted = true;
                interval = setInterval(() => {
                    time++;
                }, 1000);
            }

            if (isFlagged) return;

            if (isMined) {
                setCellByIndex(index, {
                    didExplode: true,
                });
                finishGame();
                return;
            }

            setCellByIndex(index, {
                isOpen: true,
            });

            if (--fieldsLeft === 0) {
                finishGame();
                return;
            }

            if (count === 0) {
                for (const cell of getSurroundingFields(index)) {
                    openCell(cell);
                }
            }
        }
    };

    const flagCell = index => {
        const { isOpen, isFlagged } = getCellByIndex(index);
        const shouldFlag = !isFlagged && minesLeft > 0;
        if (isOpen) return;

        setCellByIndex(index, {
            isFlagged: shouldFlag,
        });

        if (shouldFlag) {
            --minesLeft;
            return;
        }
        if (isFlagged) {
            ++minesLeft;
        }
    };

    const finishGame = () => {
        clearInterval(interval);
        gameFinished = true;
        if (fieldsLeft === 0) {
            gameVictory = true;
        }
    };

    const clearPreviousGame = () => {
        clearInterval(interval);
        gameStarted = false;
        minesLeft = mines;
        fieldsLeft = rows * cols - mines;
        time = 0;
        gameFinished = false;
        gameVictory = false;
    };

    map = generateFieldMap(cols, rows, mines);

    const startGame = () => {
        clearPreviousGame();
        map = generateFieldMap(cols, rows, mines);
    };
</script>

<style>
    .container {
        user-select: none;
        width: 724px;
    }

    .header {
        position: relative;
        border: 2px solid;
        border-color: #eee #999 #999 #eee;
        background-color: #ccc;
        width: 724px;
    }

    .header::after {
        display: block;
        content: '';
        clear: both;
    }

    .field-table {
        width: 724px;
        height: 388px;
        border: 2px solid;
        border-color: #eee #999 #999 #eee;
        background-color: #ccc;
    }

    .finished {
        pointer-events: none;
    }
</style>

<div class="container" on:contextmenu={event => event.preventDefault()}>
    <div class="header">
        <Counter
            position="left"
            number={minesLeft}
        />
        <Smiley
            onClick={startGame}
            finished={gameFinished}
            victory={gameVictory}
        />
        <Counter
            position="right"
            number={time}
        />
    </div>
    <div class="field-table" class:finished={gameFinished}>
        {#each map as { didExplode, isOpen, isMined, isFlagged, count }, i}
            <Field
                {didExplode}
                {isOpen}
                {isMined}
                {isFlagged}
                {count}
                {gameFinished}
                onMouseDown={handleMouseDown(i)}
            />
        {/each}
    </div>
</div>
