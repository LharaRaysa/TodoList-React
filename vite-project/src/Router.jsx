import { Routes} from 'react-router-dom';

import { Inicial } from './pages'
import { SobreNos } from './pages/SobreNos';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicial/>}/>
            <Route path="/sobre-nos" element={<SobreNos/>}/>
        </Routes> 
    );
};

export {Router};