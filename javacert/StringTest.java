public class StringTest{
    public static void main(String[] args){
        String s1 = "String one";
        String s2 = "String two";
        String s3 = "String " + "three";

        StringBuilder mateyMessage;
        mateyMessage = new StringBuilder("Shiver me Timbers ");
        System.out.println(mateyMessage.insert(17, " and Bricks"));

        mateyMessage = new StringBuilder("Shiver me Timbers!");
        System.out.println(mateyMessage.delete(6,16));
        
        StringBuilder str1 = new StringBuilder();
        CharSequence cs = "Hello";
        StringBuilder str2 = new StringBuilder(cs);
        StringBuilder str3 = new StringBuilder(5);
        StringBuilder str4 = new StringBuilder("Hello");


    }
}
