export const title = 'Square';
export const description = 'Draw a square centered in the drawing area. It should have a size of 100. The drawing area is 400 by 400'; // eslint-disable-line max-len

export function draw(cmds) {
  cmds.setColor(0, 0, 1);
  cmds.moveTo(50, 100);
  cmds.lineTo(350, 200);
  cmds.lineTo(350, 300);
}

export const done = false;
