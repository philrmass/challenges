export const title = 'Hexagon';
export const description = 'Draw hexagon with a side of length 100. Start the hexagon at (150, 150) and use x and y variables.'; // eslint-disable-line max-len

export function draw(cmds) {
  cmds.setColor(0, 0, 1);
  cmds.moveTo(150, 25);
  cmds.lineTo(250, 25);
  cmds.lineTo(300, 100);
  cmds.lineTo(250, 175);
  cmds.lineTo(150, 175);
  cmds.lineTo(100, 100);
  cmds.lineTo(150, 25);

  cmds.setColor(0, 1, 0);
  cmds.moveTo(150, 200);
  cmds.lineTo(250, 200);
  cmds.lineTo(300, 286.6);
  cmds.lineTo(250, 373.2);
  cmds.lineTo(150, 373.2);
  cmds.lineTo(100, 286.6);
  cmds.lineTo(150, 200);
}

export const done = true;
