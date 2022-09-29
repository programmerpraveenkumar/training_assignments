public class Sample {

//    declaring the int global variable
    int globVariable = 20;
//    declaring the String array global variable
    String[] stringGlobArray = {"One", "two", "three"};
//    declaring the long array global variable
    long[] longArray = {12345L,54321L,134679L};

    public static void main(String args[]){
//        creating the object of class Sample
        Sample sample = new Sample();
//        accessing the global variable via the new object created
        System.out.println("The value is: " + sample.globVariable);
        if (sample.globVariable > 10){
            System.out.println("The value is greater or equals to 10");
        } else {
            System.out.println("The value is smaller than 10");
        }

//        iterating through the string array global variable via the new object created
        for (String value:sample.stringGlobArray){
            System.out.println(value);
        }

//        iterating through the long array global variable via the new object created
        for (long value:sample.longArray){
            System.out.println(value);
        }
    }
}
