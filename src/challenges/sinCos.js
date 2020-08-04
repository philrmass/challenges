export const title = 'Sin and Cos';
export const description = 'Draw a square, hexagon, and 12-sided polygon using sin and cos, each with sides of length 100. Then see how many sides you need to make it look like a circle'; // eslint-disable-line max-len

function degToRad(degrees) {
  return (Math.PI / 180) * degrees;
}

function angleLine(x, y, ang, len, cmds) {
  x = x + len * Math.cos(degToRad(ang));
  y = y + len * Math.sin(degToRad(ang));

  cmds.lineTo(x, y);

  return { x, y };
}

function drawSquare(x, y, len, cmds) {
  cmds.moveTo(x, y);
  ({ x, y } = angleLine(x, y, 0, len, cmds));
  ({ x, y } = angleLine(x, y, 90, len, cmds));
  ({ x, y } = angleLine(x, y, 180, len, cmds));
  ({ x, y } = angleLine(x, y, 270, len, cmds));
}

function drawHexagon(x, y, len, cmds) {
  cmds.moveTo(x, y);
  ({ x, y } = angleLine(x, y, 0, len, cmds));
  ({ x, y } = angleLine(x, y, 60, len, cmds));
  ({ x, y } = angleLine(x, y, 120, len, cmds));
  ({ x, y } = angleLine(x, y, 180, len, cmds));
  ({ x, y } = angleLine(x, y, 240, len, cmds));
  ({ x, y } = angleLine(x, y, 300, len, cmds));
}

export function draw(cmds) {
  // purple square
  cmds.setColor(.5, 0, 1);
  drawSquare(10, 10, 100, cmds);

  cmds.setColor(0, 1, 0);
  drawSquare(390, 390, 10, cmds);

  cmds.setColor(.2, .1, .123);
  drawHexagon(100, 100, 20, cmds);

  // green 12-sided polygon
  cmds.setColor(.5, 1, 0);
  cmds.moveTo(75, 200);
  cmds.lineTo(125, 200);

  // orange circle
  cmds.setColor(1, .5, 0);
  cmds.moveTo(225, 200);
  cmds.lineTo(250, 200);
}

export const done = false;
