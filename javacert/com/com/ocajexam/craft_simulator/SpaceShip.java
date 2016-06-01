package learnprojects.javacert.com.com.ocajexam.craft_simulator;

public class SpaceShip extends Ship implements Dockable{
    // Data members
    public enum ShipType{
        FRIGATE, BATTLESHIP, MINELAYER, ESCORT, DEFENCE
    }

    ShipType shipType = ShipType.BATTLESHIP;

    // Constructors
    public SpaceShip(){
        System.out.println("\nSpaceShip created with default ship type.");
    }

    public SpaceShip(ShipType shipType){
        System.out.println("\nSpaceShip created with specified ship type.");
    }
    // Method
}
