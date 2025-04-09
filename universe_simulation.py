import random

class CelestialBody:
    def __init__(self, name, mass, position):
        self.name = name
        self.mass = mass
        self.position = position

    def __str__(self):
        return f"{self.name} at position {self.position} with mass {self.mass} kg"

class QuantumInteraction:
    @staticmethod
    def entangle(body1, body2):
        # Simulate quantum entanglement
        print(f"{body1.name} and {body2.name} are now entangled!")
        return random.choice([True, False])

def main():
    # Creating celestial bodies
    sun = CelestialBody("Sun", 1.989e30, (0, 0))
    earth = CelestialBody("Earth", 5.972e24, (1.496e11, 0))

    # Displaying celestial bodies
    print(sun)
    print(earth)

    # Example of quantum interaction
    if QuantumInteraction.entangle(sun, earth):
        print("Their destinies are intertwined in the universe's fabric.")
    else:
        print("They remain separate, yet connected by the universe's energy.")

if __name__ == "__main__":
    main()