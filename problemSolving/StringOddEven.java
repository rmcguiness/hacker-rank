import java.io.*;
import java.util.*;

public class StringOddEven {
    
    public static String oddEven(String w){
        String even = "";
        String odd = "";
        for(int i = 0; i< w.length(); i++){
            if(i%2 == 0){
               even += w.charAt(i);
            }else{
                odd += w.charAt(i);
            }
        }
        return (even + " " + odd);
    }

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner s =new Scanner(System.in);
        int n = s.nextInt();
        
        for(int i=0; i<n; i++){
            String word = s.next();
            String oddEven = oddEven(word);
            System.out.print(oddEven);
            System.out.print('\n');
        }
        s.close();
    }
}
