//Create an RPG game. I used basic ogre, attacker, defenfer, knight. Things I could think of in WoW. LOL

// Define an interface for characters that can attack
interface Attacker {
  attack(): void;
};

// Define an interface for characters that can defend
interface Defender {
  defend(): void;
};

// Define a class for characters that collects gold then displays
abstract class Character {
  protected gold: number = 0;

  collectGold(amount: number): void {
    this.gold += amount;
    console.log(`${this.constructor.name} collected ${amount} gold. Total gold: ${this.gold}`);
  };
};

// Define the Ogre class that fights with a club and defends with a shield
class Ogre extends Character implements Attacker, Defender {
  attack(): void {
    console.log("Ogre attacks with a club.");
};

defend(): void {
    console.log("Ogre defends with a shield.");
  };
};

// Define the Peon class that fights with a club and defends with a shield
class Peon extends Character implements Attacker, Defender {
    attack(): void {
    console.log("Peon attacks with a club.");
};

defend(): void {
    console.log("Peon defends with a shield.");
    }
};

// Define the Knight class that fights with a sword and defends with armor
class Knight extends Character implements Attacker, Defender {
attack(): void {
    console.log("Knight attacks with a sword.");
};

defend(): void {
    console.log("Knight defends with armor.");
    }
};

// Define the Archer class that fights with a bow and arrow and has a tunic for protection
class Archer extends Character implements Attacker {
    attack(): void {
    console.log("Archer attacks with a bow and arrow.");
  }
};

// Usage examples
const ogre = new Ogre();
ogre.attack();  // Output: Ogre attacks with a club.
ogre.defend();  // Output: Ogre defends with a shield.
ogre.collectGold(10);  // Output: Ogre collected 10 gold. Total gold: 10.

const archer = new Archer();
archer.attack();  // Output: Archer attacks with a bow and arrow.
archer.collectGold(5);  // Output: Archer collected 5 gold. Total gold: 5.

// Changing the fighting style of a character
const knight = new Knight();
knight.attack();  // Output: Knight attacks with a sword.

// Knight loses the sword and finds a club
class Club implements Attacker {
  attack(): void {
    console.log("Attacking with a club.");
  }
};

const club = new Club();
knight.attack = club.attack;
knight.attack();  // Output: Attacking with a club.
