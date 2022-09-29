public class HelloWorld {
//    main function: without the main function, jdk will not execute

//    declaring a variable for the class (global variable)
    int year = 2000;
    boolean isGood = true;



    public static void main(String args[]){
// in javascript we used console.log();
        System.out.println("Hello World!");
//    variable declaration
//    in javascript, we used let, var, const
//    in java, each variable should be declared with a proper data type
//    if you change the data type, compilation error will occur
//    eight primitive data types: byte, short, int, long, float, double, boolean, char

//        declaring a variable within a function
        int age = 45;
        boolean isChild = false;
        System.out.println(age);
        System.out.println(isChild);

//      to access the class variables (global variable)
        HelloWorld hello = new HelloWorld();
        System.out.println(hello.year);


    }



}

