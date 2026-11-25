// src/ai/steering.js
// Gerak makhluk: kejar, kabur, mengembara.

export const Steering = {
  seek(entity, targetX, targetY, speed = 1) {
    const dx = targetX - entity.x;
    const dy = targetY - entity.y;
    const dist = Math.hypot(dx, dy);
    if (dist === 0) return { x: 0, y: 0 };
    return { x: (dx / dist) * speed, y: (dy / dist) * speed };
  },

  flee(entity, threatX, threatY, speed = 1) {
    const dx = entity.x - threatX;
    const dy = entity.y - threatY;
    const dist = Math.hypot(dx, dy);
    if (dist === 0) return { x: 0, y: 0 };
    return { x: (dx / dist) * speed, y: (dy / dist) * speed };
  },

  wander(entity) {
    const angle = Math.random() * Math.PI * 2;
    return { x: Math.cos(angle), y: Math.sin(angle) };
  },
};
