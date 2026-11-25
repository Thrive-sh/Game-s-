// src/systems/combat.js
// Sistem tarung & damage.

export class Combat {
  tick(world) {
    // Implementasi serang antara entitas
  }

  dealDamage(attacker, target, amount) {
    target.hp -= amount;
    if (target.hp <= 0) target.die();
  }
}
