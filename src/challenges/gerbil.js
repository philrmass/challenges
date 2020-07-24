export const title = 'Gerbil';
export const description = 'Draw a picture of a gerbil using lines and color. Make them as cute as possible'; // eslint-disable-line max-len

export function draw(cmds) {
  cmds.setColor(0.4, 0.3, 0.2);
  cmds.moveTo(150, 150);
  cmds.lineTo(250, 150);
  cmds.lineTo(250, 250);
  cmds.lineTo(150, 250);
  cmds.lineTo(150, 150);
}

export const done = false;
