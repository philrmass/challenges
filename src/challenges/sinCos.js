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

function drawDodecagon(x, y, len, cmds) {
  cmds.moveTo(x, y);
  ({ x, y } = angleLine(x, y, 0, len, cmds));
  ({ x, y } = angleLine(x, y, 30, len, cmds));
  ({ x, y } = angleLine(x, y, 60, len, cmds));
  ({ x, y } = angleLine(x, y, 90, len, cmds));
  ({ x, y } = angleLine(x, y, 120, len, cmds));
  ({ x, y } = angleLine(x, y, 150, len, cmds));
  ({ x, y } = angleLine(x, y, 180, len, cmds));
  ({ x, y } = angleLine(x, y, 210, len, cmds));
  ({ x, y } = angleLine(x, y, 240, len, cmds));
  ({ x, y } = angleLine(x, y, 270, len, cmds));
  ({ x, y } = angleLine(x, y, 300, len, cmds));
  ({ x, y } = angleLine(x, y, 330, len, cmds));
}

function drawPolygon(x, y, len, sides, cmds) {
  const sideangle = 360 / sides;

  cmds.moveTo(x, y);
  for (let i = 0; i < sides; i++) {
    const angle = i * sideangle;
    ({ x, y } = angleLine(x, y, angle, len, cmds));
  }
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
  cmds.setColor(.25, .5, 0);
  drawDodecagon(250, 200, 20, cmds);

  // orange pentagon
  cmds.setColor(1, .5, 0);
  drawPolygon(50, 200, 50, 5, cmds);

  // red octagon
  cmds.setColor(1, 0, 0);
  drawPolygon(250, 50, 40, 8, cmds);
}

export const done = false;
