export const title = 'Square';
export const description = 'Draw a square centered in the drawing area. It should have a size of 100. The drawing area is 400 by 400'; // eslint-disable-line max-len

export function draw(cmds) {
  cmds.setColor(0, 0, 1);

  let x = 50;
  let y = 100;
  cmds.moveTo(x, y);

  x = x + 300;
  y = y + 100;
  cmds.lineTo(x, y);

  y = y + 100;
  cmds.lineTo(x, y);
}

export const done = false;
