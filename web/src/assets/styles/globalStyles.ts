import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input,
button,
textarea {
  font: 500 1.6rem Poppins;
}

h1,
h2, 
h3,
button
{
  font-family: Archivo;
}

body {
  background: var(--blue);
  color: var(--text-in-primary);

  font-size: 1.6rem;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
}

:root {
    --white: #fff;
    --light-blue: #CBEDF3;
    --blue: #0CAECA;
    --blue-green: #009879;
    --dark-blue: #212667;
    --title-blue: #003d44;

    --red: #D52B2B;
    --error-primary: #FFBFCB;
    --text-in-primary: #505050;

    font-size: 60%;
  }

  @media (min-width: 700px){
    :root {
      font-size: 62.5%;
    }
  }
`;