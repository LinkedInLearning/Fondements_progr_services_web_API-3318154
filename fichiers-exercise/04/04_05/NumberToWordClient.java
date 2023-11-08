import com.dataaccess.webservicesserver.NumberConversion;
import java.math.BigInteger;
import java.util.Scanner;

public class NumberToWordClient {

    public static void main(String[] args) throws Exception {
        // Create an instance of the service
        NumberConversion service = new NumberConversion();

        // Use Scanner to get user input
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        String userInput = scanner.nextLine();

        // Convert the user input to a BigInteger
        BigInteger number;
        try {
            number = new BigInteger(userInput);
        } catch (NumberFormatException e) {
            System.out.println("Invalid input. Please enter a valid number.");
            return;
        }

        System.out.println("Converted number: " + service.getNumberConversionSoap().numberToWords(number));
    }
}
