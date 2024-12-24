import { Box } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import PieColor from './Graphs';
import Map from './Map';
import Organization from './Organization';
import Types from './Types';
import Years from './Years';

export default function Main() {
  
  return (
    <Box>
      <Routes>
        <Route path="/home" element={
          <>
            <Map />
            <PieColor />
          </> }
          />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/countries" element={<Map />} />
        <Route path="/types" element={<Types />} />
        <Route path="/years" element={<Years />} />
        <Route path="*" element={<div>הדף לא נמצא.</div>} />
      </Routes>
    </Box>
  );
}
