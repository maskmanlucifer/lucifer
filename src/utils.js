export const logEasterEgg = () => {
    let msg = `%c Hi mate 👋! Welcome to my site!`;
    let styles = [
        `font-size: 12px`,
        `font-family: monospace`,
        `background: white`,
        `display: inline-block`,
        `color: black`,
        `padding: 8px 19px`,
        `border: 1px dashed;`
    ].join(`;`)
    console.log(msg, styles);
};