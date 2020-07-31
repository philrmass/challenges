export const title = 'Gerbil';
export const description = 'Draw a picture of a gerbil using lines and color. Make them as cute as possible'; // eslint-disable-line max-len

export function draw(cmds) {
  // body
  cmds.setColor(0.4, 0.3, 0.2);
  cmds.moveTo(100, 100);
  cmds.lineTo(300, 100);
  cmds.lineTo(350, 150);
  cmds.lineTo(300, 200);
  cmds.lineTo(100, 200);
  cmds.lineTo(100, 110);
  cmds.lineTo(0, 110);
  cmds.lineTo(0, 100);
  cmds.lineTo(100, 100);

  // eye
  cmds.setColor(0., 0., 0.5);
  cmds.moveTo(300, 195);
  cmds.lineTo(300, 175);
  cmds.lineTo(280, 175);
  cmds.lineTo(280, 195);
  cmds.lineTo(300, 195);

  // nose
  cmds.setColor(0.5, 0., 0.5);
  cmds.moveTo(340, 140);
  cmds.lineTo(340, 160);

  //
  cmds.setColor(0., 0., 0.);
  cmds.moveTo(340, 160);
  cmds.lineTo(320, 170);
  cmds.moveTo(340, 160);
  cmds.lineTo(320, 170);
}

export const done = true;
