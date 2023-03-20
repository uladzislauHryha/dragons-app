import AppBar from "./AppBar";
import { useEffect } from "react";

import '../styles/App.css';
import SpellList from "./SpellList";
import Container from "@mui/material/Container";
import { fetchSpells } from "../store/spellSlice";
import { useAppDispatch } from "../store/hook";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSpells());
  }, [dispatch]);


  return (
    <div className="App">
      <AppBar />
      <Container maxWidth="lg">
        <SpellList />
      </Container>
    </div>
  );
}

