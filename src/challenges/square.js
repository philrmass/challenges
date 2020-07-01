export const title = 'Square';
export const description = 'Draw a square centered in the drawing area. It should have a size of 100. Draw another centered square with a size of 200, using x and y variables. The drawing area is 400 by 400'; // eslint-disable-line max-len

export function draw(cmds) {
  cmds.setColor(0, 0, 1);

  cmds.moveTo(150, 150);
  cmds.lineTo(250, 150);
  cmds.lineTo(250, 250);
  cmds.lineTo(150, 250);
  cmds.lineTo(150, 150);

  let x = 100;
  let y = 100;
  cmds.moveTo(x, y);
  console.log('1) X', x, 'Y', y);

  x = x + 200;
  cmds.lineTo(x, y);
  console.log('2) X', x, 'Y', y);

  y = y + 200;
  cmds.lineTo(x, y);
  console.log('3) X', x, 'Y', y);

  x = x - 200;
  cmds.lineTo(x, y);
  console.log('4) X', x, 'Y', y);
  y = y - 200;
  cmds.lineTo(x, y);
  console.log('5) X', x, 'Y', y);
}

export const done = true;
