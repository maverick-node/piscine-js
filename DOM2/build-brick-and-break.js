export function build(num) {
    for (let i = 1; i <= num; i++) {
        let brick = document.createElement("div");
        brick.id = "brick-" + i
        if (i % 3 === 2) {
            brick.setAttribute("data-foundation", "true");
        }

        setTimeout(() => { document.body.append(brick) }, i * 100);
    }
}

export function repair(...id) {
    id.forEach(ids => {
        let brick = document.getElementById(ids);
        if (brick.getAttribute("data-foundation")) {
            brick.setAttribute("data-repaired", "in progress")
        } else {
            brick.setAttribute("data-repaired", true)
        }
    });
}

export function destroy() {
    let brick = document.getElementsByTagName("div");

    let lastBrick = brick[brick.length - 1];
    lastBrick.remove();

}