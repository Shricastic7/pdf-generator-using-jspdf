# Certificate Generator using jsPDF

This project is a simple web application that allows users to generate certificates of completion using the jsPDF library. Users can input student details such as name, PRN (Personal Registration Number), course name, and completion date, and the application will generate a PDF certificate with the provided information.

## Features

- Input fields for student name, PRN, course name, and completion date.
- Certificate generation with the provided information.
- Verification code generation using CryptoJS SHA256 hashing algorithm.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- jsPDF: A JavaScript library for generating PDF files.
- CryptoJS: A JavaScript library for cryptographic functions.

## Usage

1. Clone the repository from [pdf-generator-using-jspdf](https://github.com/Shricastic7/pdf-generator-using-jspdf).
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Enter the student details in the input fields.
5. Click on the "Create Certificate" button to generate the certificate.
6. The generated certificate will be downloaded as a PDF file.

## Project Structure

- **App.js**: Main component containing the form and certificate generation logic.
- **App.css**: Stylesheet for the application.
- **jsPDF**: Folder containing the jsPDF library.
- **CryptoJS**: Folder containing the CryptoJS library.
- **README.md**: Project documentation.

## How it Works

1. Users input student details into the form fields.
2. Upon clicking the "Create Certificate" button, the application generates a verification code by hashing the input data using the SHA256 algorithm from the CryptoJS library.
3. The application then uses jsPDF to create a PDF certificate with the provided information and the generated verification code.
4. The generated PDF certificate is downloaded to the user's device.

## Contributions

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, feel free to open an issue or create a pull request on the GitHub repository.

## License

This project is licensed under the MIT License.

## Author

This project was created by [Shricastic7](https://github.com/Shricastic7).

## Acknowledgments

- This project was inspired by the need for a simple certificate generation tool.
- Special thanks to the developers of jsPDF and CryptoJS for their excellent libraries.
