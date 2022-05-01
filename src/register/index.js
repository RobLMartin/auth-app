import styled from "styled-components";
import {
  Card as MuiCard,
  Button,
  Link,
  Typography,
  TextField,
} from "@mui/material";

export default function Register() {
  return (
    <Card>
      <Typography variant="h5">Sign up</Typography>
      <TextField label="Username" />
      <TextField label="Password" type="password" />
      <TextField label="Confirm Password" type="password" />
      <Button variant="contained">Create Account</Button>
      <Typography align="center">
        Already have an account? <Link>Log in</Link>
      </Typography>
    </Card>
  );
}

const Card = styled(MuiCard)`
  width: 500px;
  display: grid;
  grid-gap: 2em;
  padding: 2em;
`;
