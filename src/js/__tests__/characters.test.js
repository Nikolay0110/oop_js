import Character from "../character";
import Bowman from "../bowman";
import Swordsman from "../swordsman";
import Magician from "../magician";
import Daemon from "../daemon";
import Undead from "../undead";
import Zombie from "../zombie";


// Character tests
test("should throw an error when name is not a string", () => {
    expect(() => {
        new Character(1);
    }).toThrow('Имя или тип не верно указаны');
});

test('should throw an error when name length is less than 2', () => {
    expect(() => {
        new Character('A')
    }).toThrow('Имя или тип не верно указаны');
});

test('should throw an error when name length is greater than 10', () => {
    expect(() => {
        new Character('Asdfhgfsghdfh')
    }).toThrow('Имя или тип не верно указаны')
});

test('should create a character with a valid name', () => {
    const character = new Character('Max');
    expect(character.name).toBe('Max');
});

test('levelUp test error handler', () => {
    const character = new Character('Max');
    character.health = 0;
    expect(() => {
        character.levelUp(character.health, character.level, character.attack, character.defence); 
    }).toThrow('Нельзя повысить левел умершего')
})

test('damage error if player dead', () => {
    const character = new Character('Max');
    character.health = 0;
    expect(() => {
        character.damage(10)
    }).toThrow('Игрок уже мертв')
})


// Bowman tests
test('bowman test create class', () => {
    const bowman = new Bowman('Max');
    const expected = {
        "name": "Max",
        "type": "Bowman",
        "health": 100,
        "level": 1,
        "attack": 25,
        "defence": 25
    }
    expect(bowman).toEqual(expected);
});

test('bowman damage test', () => {
    const bowman = new Bowman('Max');
    bowman.damage(10)
    expect(bowman.health).toBe(92.5);
})

test('bowman levelUp test', () => {
    const bowman = new Bowman('Max');
    bowman.levelUp(bowman.health, bowman.level, bowman.attack, bowman.defence); 
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(30);
    expect(bowman.defence).toBe(30);
})


// Daemon tests
test('daemon test create class', () => {
    const daemon = new Daemon('Aid');
    const expected = {
        "name": "Aid",
        "type": "Daemon",
        "health": 100,
        "level": 1,
        "attack": 10,
        "defence": 40
    }
    expect(daemon).toEqual(expected);
  });

test('daemon damage test', () => {
    const daemon = new Daemon('Aid');
    daemon.damage(10)
    expect(daemon.health).toBe(94);
})

test('daemon levelUp test', () => {
    const daemon = new Daemon('Aid');
    daemon.levelUp(daemon.health, daemon.level, daemon.attack, daemon.defence); 
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(2);
    expect(daemon.attack).toBe(12);
    expect(daemon.defence).toBe(48);
})


// Magician tests
test('magician test create class', () => {
    const mag = new Magician('Shadow');
    const expected = {
        "name": "Shadow",
        "type": "Magician",
        "health": 100,
        "level": 1,
        "attack": 10,
        "defence": 40
    }
    expect(mag).toEqual(expected);
  });

test('magician damage test', () => {
    const mag = new Magician('Shadow');
    mag.damage(10)
    expect(mag.health).toBe(94);
})

test('magician levelUp test', () => {
    const magician = new Magician('Shadow');
    magician.levelUp(magician.health, magician.level, magician.attack, magician.defence); 
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(2);
    expect(magician.attack).toBe(12);
    expect(magician.defence).toBe(48);
})


// Swordsman tests
test('swordsman test create class', () => {
    const swordsman = new Swordsman('Duke');
    const expected = {
        "name": "Duke",
        "type": "Swordsman",
        "health": 100,
        "level": 1,
        "attack": 40,
        "defence": 10
    }
    expect(swordsman).toEqual(expected);
  });

test('swordsman damage test', () => {
    const swordsman = new Swordsman('Duke');
    swordsman.damage(10)
    expect(swordsman.health).toBe(91);
})

test('swordsman levelUp test', () => {
    const swordsman = new Swordsman('Duke');
    swordsman.levelUp(swordsman.health, swordsman.level, swordsman.attack, swordsman.defence); 
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(2);
    expect(swordsman.attack).toBe(48);
    expect(swordsman.defence).toBe(12);
})


// Undead tests
test('undead test create class', () => {
    const undead = new Undead('Adam');
    const expected = {
        "name": "Adam",
        "type": "Undead",
        "health": 100,
        "level": 1,
        "attack": 25,
        "defence": 25
    }
    expect(undead).toEqual(expected);
  });

test('undead damage test', () => {
    const undead = new Undead('Adam');
    undead.damage(10)
    expect(undead.health).toBe(92.5);
})

test('undead levelUp test', () => {
    const undead = new Undead('Adam');
    undead.levelUp(undead.health, undead.level, undead.attack, undead.defence); 
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(2);
    expect(undead.attack).toBe(30);
    expect(undead.defence).toBe(30);
})


// Zombie tests
test('zombie test create class', () => {
    const zombie = new Zombie('Snork');
    const expected = {
        "name": "Snork",
        "type": "Zombie",
        "health": 100,
        "level": 1,
        "attack": 40,
        "defence": 10
    }
    expect(zombie).toEqual(expected);
  });

test('zombie damage test', () => {
    const zombie = new Zombie('Snork');
    zombie.damage(10)
    expect(zombie.health).toBe(91);
})

test('zombie levelUp test', () => {
    const zombie = new Zombie('Snork');
    zombie.levelUp(zombie.health, zombie.level, zombie.attack, zombie.defence); 
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(2);
    expect(zombie.attack).toBe(48);
    expect(zombie.defence).toBe(12);
})
